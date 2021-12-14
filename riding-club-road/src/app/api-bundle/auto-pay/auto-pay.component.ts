import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
} from "@angular/forms";
import { TenantInfoService } from "../services/tenant-info.service";
import { FetchDataService } from "../services/fetch-data.service";
import { SignOutService } from "../services/sign-out.service";
import { LstPayTypes, PayTypes, PayTypeForResult } from "../models/payment";
import { UnpaidAR, ObjTenant } from "../models/tenant";
import { month } from "../../data/date";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { SurchargeService } from "../services/surcharge.service";
import { DataSharingService } from "../services/data-sharing.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-auto-pay",
  templateUrl: "./auto-pay.component.html",
  styleUrls: ["./auto-pay.component.scss"],
})
export class AutoPayComponent implements OnInit, OnDestroy {
  objTenant: ObjTenant;
  showPaymentForReserve: boolean;
  showPaymentForMoveIn: boolean;
  balance: number;
  autoPayForm: FormGroup;
  payTypes: PayTypes;
  // lstPayTypes: LstPayTypes[];
  payTypeForResult: PayTypeForResult;
  selectedDescription: string;
  result: any;
  month: any;
  CCApprovalCode: string;
  year = [];
  payRentForm: FormGroup;
  textBox: any;
  tenant: any;
  lstPayTypes = [];
  achPayment = false;
  PayTypeIDValue: number;
  displayBalance: number;
  invalidPayment: string;
  sessionExpire: string;
  showInput = false;
  submitted = false;
  showloaderForPayment = false;
  toggleSignUp = false;
  IsAutoPaymentsEnabled = false;
  makeAutoPayStatus = false;
  TotalReserveAmount: number;
  totalMoveInAmount: number;
  date: Date;
  reservationInProgress: boolean;
  MinDate: string;
  minDate: Date;
  strAccessCode: string;
  surcharge: number;
  unitTypeNotAvailability: boolean;
  showLoader = false;
  marked = false;
  signUp = {};
  logOut = {};
  defaultCardType: string;

  otherValue = 0;
  id: string;

  UnpaidAR: UnpaidAR[];

  showSuccessStatus = false;

  lastPaymentOn: string;
  lastPaymentAmount: string;

  paytypeid: number;
  amountToPay: number;

  customOtherValue: number;
  errorMessage: string;
  showError = false;
  count = 0;
  navigateToReserve: boolean;
  navigateToMoveIn: boolean;
  existTempToken: string;
  tokenExit: string;
  showConfirmation: boolean;
  strConfirmation: string;
  tokenRemoved = false;
  MoveIn = {
    dteMoveIn: "",
    intUnitTypeID: 0,
  };
  navigateToMoveInPayment: boolean;
  tenantTokenExist = false;
  objTenantCopy: any;

  cardType: string;
  successMessage: string;
  progressMessage: string;
  paymentTab: string;
  isDataUpdated = false;
  enableUpdateButton = false;
  canExit = true;
  messageSavedData: string;
  isDataSaved = false;

  private OptionOutOfAutoPaySubscribe$: Subscription;
  private signUpAutoPaySubscribe$: Subscription;
  private signOutSubscribe$: Subscription;
  private makePaymentSubscribe$: Subscription;
  private getPayMethodsSubscribe$: Subscription;
  private getTenantInfoSubscribe$: Subscription;
  cards: any;

  constructor(
    private formBuilder: FormBuilder,
    private tenantInfoService: TenantInfoService,
    private fetchDataService: FetchDataService,
    private signOutService: SignOutService,
    private surchargeService: SurchargeService,
    private dataSharingService: DataSharingService,
    public router: Router
  ) {
    this.autoPayForm = this.formBuilder.group({
      objTenant: this.formBuilder.group({
        ACHBankRoutingNumber: [
          "",
          conditionalValidator(
            () => this.achPayment === false,
            Validators.required
          ),
        ],
        ACHBankAccountNumber: [
          "",
          conditionalValidator(
            () => this.achPayment === false,
            Validators.required
          ),
        ],
        PayType: this.formBuilder.group({
          PayTypeDescription: ["", Validators.required],
          PayTypeID: [""],
        }),
        // PaymentAmount: ["", Validators.required],
        // SignUpForAutoPay: [],
      }),
    });

    function conditionalValidator(
      condition: () => boolean,
      validator: ValidatorFn
    ): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } => {
        if (condition()) {
          return null;
        }
        return validator(control);
      };
    }

    let newYear = new Date().getFullYear();
    for (let i = 1; i < 15; i++) {
      this.year.push({
        id: newYear.toString().slice(-2),
        label: newYear,
      });

      newYear = newYear + 1;
    }

    if (this.router.url === "/pay-rent/sign-up/payment") {
      this.navigateToMoveInPayment = true;
    }

    if (!!localStorage.getItem("paymentTab")) {
      this.paymentTab = localStorage.getItem("paymentTab");
    }

    this.fetchCards();
  }

  public fetchCards() {
    this.cards = environment.cards;
  }

  @HostListener("window:beforeunload", ["$event"])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }

  public hasUnsavedData() {
    return this.canExit;
  }

  ngOnInit() {
    console.log("autopay");
    if (!!localStorage.getItem("strTenantToken")) {
      this.getPayMethods();
    } else {
      if (!localStorage.getItem("strTempTenantToken")) {
        this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
      } else {
        this.getPayMethods();
      }
    }
    this.fetchMonth();

    if (
      !!this.dataSharingService.isDataSaved &&
      !!this.dataSharingService.isDataUpdated
    ) {
      this.isDataUpdated = this.dataSharingService.isDataUpdated;
      this.enableUpdateButton = true;
    }
  }

  get f() {
    return this.autoPayForm.controls;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  public fetchMonth() {
    this.month = month;
  }

  getSurCharge() {
    this.surcharge = 0;
    this.surchargeService.getSurCharge().subscribe(
      (result) => {
        this.amountToPay = result.decTotalAmount;
        this.dataSharingService.amountToPayThankYou = this.amountToPay;
        this.TotalReserveAmount = result.decTotalAmount;

        if (this.router.url.includes("payReservationCharges")) {
          this.surcharge = result.decTotalAmount - this.TotalReserveAmount;
        } else {
          if (this.router.url.includes("payMoveInCharges")) {
            this.surcharge = result.decTotalAmount - this.totalMoveInAmount;
          } else {
            if (this.showInput) {
              if (this.customOtherValue) {
                this.surcharge = result.decTotalAmount - this.customOtherValue;
              }
            } else {
              if (this.balance > 0) {
                this.surcharge = result.decTotalAmount - this.balance;
              }
            }
          }
        }
      },
      (err: any) => {
        if (err.status === 400) {
          this.showError = true;
          this.errorMessage = "Please enter the valid amount";
        }
      }
    );
  }

  autoCardType(number: any) {
    this.cardType = this.getCardType(number.target.value);
    const index = this.lstPayTypes.findIndex(
      (x) => x.PayTypeDescription === this.cardType
    );
    // tslint:disable-next-line: max-line-length
    const cardTypeId =
      index > -1
        ? this.lstPayTypes[index].PayTypeID
        : this.lstPayTypes[0].PayTypeID;
    this.paytypeid = cardTypeId;
    this.surchargeService.getIdPaytype(this.paytypeid);
    this.autoPayForm.patchValue({
      objTenant: {
        // PreferredPaymentMethod: cardTypeId,
        PayType: {
          PayTypeDescription: this.cardType,
          PayTypeID: cardTypeId,
        },
      },
    });
  }

  getCardType(number: any) {
    // visa
    let re = new RegExp("^4");
    if (number.match(re) != null) {
      return "Visa";
    }

    // Mastercard
    // Updated for Mastercard 2017 BINs expansion
    // tslint:disable-next-line: max-line-length
    if (
      /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
        number
      )
    ) {
      return "Master Card";
    }

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null) {
      return "Amex";
    }

    // Discover
    re = new RegExp(
      "^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"
    );
    if (number.match(re) != null) {
      return "Discover";
    }

    return "";
  }

  saveDetail() {
    this.dataSharingService.cardDetailsObject = Object.assign(
      {},
      this.autoPayForm.controls.objTenant.value
    );
    this.isDataSaved = true;
    this.dataSharingService.isDataSaved = true;
    this.messageSavedData = "Card Details saved.";
  }

  selectChangeHandler(event: any) {
    this.selectedDescription = JSON.stringify(event.target.value);
    const indexValue = event.target.value;
    const index = this.lstPayTypes.findIndex(
      (x) => x.PayTypeDescription === indexValue
    );
    this.PayTypeIDValue = this.lstPayTypes[index].PayTypeID;
    this.surchargeService.getIdPaytype(this.PayTypeIDValue);
    this.autoPayForm.patchValue({
      objTenant: {
        // PreferredPaymentMethod: this.PayTypeIDValue,
        PayType: {
          PayTypeID: this.PayTypeIDValue,
        },
      },
    });
    console.log(this.PayTypeIDValue);
    if (this.PayTypeIDValue === -8) {
      this.achPayment = true;
    } else {
      this.achPayment = false;
    }
    console.log(this.achPayment);
  }

  getTenantInfo() {
    this.getTenantInfoSubscribe$ = this.tenantInfoService
      .getTenantInfo()
      .subscribe(
        (tenantData) => {
          if (tenantData) {
            const { Tenant } = tenantData;
            this.balance = Tenant.Balance;
            this.surchargeService.setAmt(this.balance);
            this.surchargeService.getIdPaytype(this.paytypeid);
            this.IsAutoPaymentsEnabled = Tenant.IsAutoPaymentsEnabled;
            this.date = Tenant.LastPaymentOn;
            this.dataSharingService.signUpForAutoPay =
              Tenant.IsAutoPaymentsEnabled;
            // tslint:disable-next-line: max-line-length
            this.defaultCardType = Tenant.ACHBankRoutingNumber
              ? this.getCardType(Tenant.ACHBankRoutingNumber)
              : this.lstPayTypes[0].PayTypeDescription;
            const index = this.lstPayTypes.findIndex(
              (x) => x.PayTypeDescription === this.defaultCardType
            );
            // tslint:disable-next-line: max-line-length
            const defaultCardPayTypeId =
              index > -1
                ? this.lstPayTypes[index].PayTypeID
                : this.lstPayTypes[0].PayTypeID;

            if (localStorage.getItem("strTenantToken")) {
              this.paytypeid = defaultCardPayTypeId;
              this.surchargeService.getIdPaytype(this.paytypeid);
              this.autoPayForm.patchValue({
                objTenant: {
                  // PreferredPaymentMethod: defaultCardPayTypeId,
                  PayType: {
                    PayTypeDescription: this.defaultCardType,
                    PayTypeID: defaultCardPayTypeId,
                  },
                },
              });
            }
            const tempObject = {
              ACHBankRoutingNumber: Tenant.ACHBankRoutingNumber,
              ACHBankAccountNumber: Tenant.ACHBankAccountNumber,
              // CCExpirationMonth: Tenant.CCExpirationMonth,
              // CCExpirationYear: Tenant.CCExpirationYear,
              // CCBillingAddress: Tenant.CCBillingAddress,
              // CCBillingZIP: Tenant.CCBillingZIP,
              PayType: {
                PayTypeDescription: this.defaultCardType,
                PayTypeID: defaultCardPayTypeId,
              },
            };

            if (
              !!this.dataSharingService.isDataUpdated &&
              !!this.dataSharingService.isDataSaved
            ) {
              this.autoPayForm.patchValue({
                objTenant: {
                  ACHBankRoutingNumber:
                    this.dataSharingService.cardDetailsObject
                      .ACHBankRoutingNumber,
                  ACHBankAccountNumber:
                    this.dataSharingService.cardDetailsObject
                      .ACHBankAccountNumber,
                  // CCExpirationMonth: this.dataSharingService.cardDetailsObject.CCExpirationMonth,
                  // CCExpirationYear: this.dataSharingService.cardDetailsObject.CCExpirationYear,
                  // CCBillingAddress: this.dataSharingService.cardDetailsObject.CCBillingAddress,
                  // CCBillingZIP: this.dataSharingService.cardDetailsObject.CCBillingZIP,
                  SignUpForAutoPay: Tenant.IsAutoPaymentsEnabled,
                },
              });
            } else {
              this.autoPayForm.patchValue({
                objTenant: {
                  ACHBankRoutingNumber: Tenant.ACHBankRoutingNumber,
                  ACHBankAccountNumber: Tenant.ACHBankAccountNumber,
                  // CCExpirationMonth: Tenant.CCExpirationMonth,
                  // CCExpirationYear: Tenant.CCExpirationYear,
                  // CCBillingAddress: Tenant.CCBillingAddress,
                  // CCBillingZIP: Tenant.CCBillingZIP,
                  SignUpForAutoPay: Tenant.IsAutoPaymentsEnabled,
                },
              });
            }

            this.autoPayForm.controls.objTenant.valueChanges.subscribe(
              (data) => {
                this.objTenantCopy = data;
                this.dataSharingService.isDataUpdated =
                  JSON.stringify(this.objTenantCopy) !==
                  JSON.stringify(tempObject);
                this.isDataUpdated = this.dataSharingService.isDataUpdated;
                this.enableUpdateButton = true;
              }
            );
            this.showLoader = false;
          }
        },
        (err: any) => {
          if (err.status === 401) {
            localStorage.removeItem("strTenantToken");
            this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
            this.sessionExpire =
              "Session Expired. Please Login for completing the payment.";
          }
        }
      );
  }

  public navigateToConfirmation(location: any) {
    this.router.navigate([location]);
  }

  getPayMethods() {
    this.getPayMethodsSubscribe$ = this.fetchDataService
      .getPayMethods()
      .subscribe((payTypesResponse) => {
        this.cards.forEach((element) => {
          console.log("elemet", element);
          const index = payTypesResponse.lstPayTypes.findIndex(
            (x) => x.PayTypeDescription === element
          );
          if (index > -1 && element === "ACH - PPD") {
            this.lstPayTypes.push(payTypesResponse.lstPayTypes[index]);
          }
        });

        //  console.log("this.lstPayTypes", this.lstPayTypes);
        if (!!localStorage.getItem("strTenantToken")) {
          this.tenantTokenExist = true;
          this.showLoader = true;
          this.getTenantInfo();
        } else {
          console.log("autopay", this.lstPayTypes[0]);
          const defaultDescription = this.lstPayTypes[0].PayTypeDescription;
          const defaultPayTypeID = this.lstPayTypes[0].PayTypeID;
          this.paytypeid = this.lstPayTypes[0].PayTypeID;
          this.surchargeService.getIdPaytype(this.paytypeid);
          this.getSurCharge();
          this.payRentForm.patchValue({
            objTenant: {
              PayType: {
                PayTypeDescription: defaultDescription,
                PayTypeID: defaultPayTypeID,
              },
            },
          });
          console.log("default value", defaultPayTypeID);
        }
      });
  }

  toggleEvent() {
    this.enableUpdateButton = true;
    this.count = this.count + 1;
    this.toggleSignUp = true;
    this.dataSharingService.signUpForAutoPay =
      !this.dataSharingService.signUpForAutoPay;
  }

  goBack() {
    this.showSuccessStatus = false;
    this.showloaderForPayment = false;
    this.IsAutoPaymentsEnabled = this.dataSharingService.signUpForAutoPay;
  }

  signOut(logOut: any) {
    this.signOutSubscribe$ = this.signOutService.signOut(logOut).subscribe(
      (result) => {
        localStorage.removeItem("strTenantToken");
        this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
      },
      (err) => {}
    );
  }

  signUpAutoPay(signUp: any) {
    this.makeAutoPayStatus = true;
    this.progressMessage = "Sign Up Auto Pay";
    this.signUpAutoPaySubscribe$ = this.tenantInfoService
      .signUpAutoPay(signUp)
      .subscribe(
        (result) => {
          this.makeAutoPayStatus = false;
          if (result.intErrorCode === 1) {
            this.showSuccessStatus = true;
            if (this.dataSharingService.isDataUpdated) {
              this.successMessage = `Card Details Updated.`;
              if (this.toggleSignUp === true) {
                this.customSignUp();
              }
              if (
                this.IsAutoPaymentsEnabled === false &&
                this.toggleSignUp === false
              ) {
                this.OptionOutOfAutoPay(this.signUp);
              }
            } else {
              this.successMessage = "Sign Up Auto Pay is Completed.";
            }
          }
          this.toggleSignUp = false;
          this.dataSharingService.isDataUpdated = false;
        },
        (err) => {}
      );
  }

  OptionOutOfAutoPay(signUp: any) {
    this.makeAutoPayStatus = true;
    this.progressMessage = "Option Out Of AutoPay";
    this.OptionOutOfAutoPaySubscribe$ = this.tenantInfoService
      .OptionOutOfAutoPay(signUp)
      .subscribe(
        (result) => {
          this.makeAutoPayStatus = false;
          if (result.intErrorCode === 1) {
            this.showSuccessStatus = true;
            switch (true) {
              case this.isDataUpdated && this.count > 0:
                this.successMessage =
                  "Card Details Updated and Option Out Of AutoPay is Completed";
                break;
              case this.isDataUpdated && this.count === 0:
                this.successMessage = "Card Details Updated.";
                break;
              default:
                this.successMessage = "Option Out Of AutoPay is Completed.";
            }
          }
          this.toggleSignUp = false;
          this.dataSharingService.isDataUpdated = false;
        },
        (err) => {}
      );
  }

  convertDate(date: any) {
    const formattedNormalDate = new Date(date);
    // tslint:disable-next-line:max-line-length
    return `${
      formattedNormalDate.getMonth() + 1
    }-${formattedNormalDate.getDate()}-${formattedNormalDate.getFullYear()}`;
  }

  customSignUp() {
    if (this.dataSharingService.signUpForAutoPay === true) {
      const signUpData = {
        objTenant: {
          ACHBankRoutingNumber:
            this.autoPayForm.value.objTenant.ACHBankRoutingNumber,
          ACHBankAccountNumber:
            this.autoPayForm.value.objTenant.ACHBankAccountNumber,
          PreferredPaymentMethod:
            this.autoPayForm.value.objTenant.PayType.PayTypeID,
        },
      };
      this.signUpAutoPay(signUpData);
    } else {
      this.OptionOutOfAutoPay(this.signUp);
    }
  }

  customDataUpdate() {
    const data = {
      objTenant: {
        ACHBankRoutingNumber:
          this.autoPayForm.value.objTenant.ACHBankRoutingNumber,
        ACHBankAccountNumber:
          this.autoPayForm.value.objTenant.ACHBankAccountNumber,
        PreferredPaymentMethod:
          this.autoPayForm.value.objTenant.PayType.PayTypeID,
      },
    };
    this.signUpAutoPay(data);
  }

  autoPayStatus() {
    console.log("end3");
    switch (true) {
      case this.dataSharingService.isDataUpdated === true &&
        this.toggleSignUp === true:
        this.customDataUpdate();
      case this.toggleSignUp === true:
        this.customSignUp();
      case this.dataSharingService.isDataUpdated === true:
        this.customDataUpdate();
    }
  }

  onSubmit() {
    this.submitted = true;
    this.makeAutoPayStatus = true;
    if (this.autoPayForm.invalid) {
      return;
    } else {
      this.showloaderForPayment = true;
      this.autoPayStatus();
    }
  }

  public ngOnDestroy(): void {
    if (
      this.OptionOutOfAutoPaySubscribe$ &&
      this.OptionOutOfAutoPaySubscribe$.closed
    ) {
      this.OptionOutOfAutoPaySubscribe$.unsubscribe();
    }

    if (this.signUpAutoPaySubscribe$ && this.signUpAutoPaySubscribe$.closed) {
      this.signUpAutoPaySubscribe$.unsubscribe();
    }

    if (this.signOutSubscribe$ && this.signOutSubscribe$.closed) {
      this.signOutSubscribe$.unsubscribe();
    }

    if (this.makePaymentSubscribe$ && this.makePaymentSubscribe$.closed) {
      this.makePaymentSubscribe$.unsubscribe();
    }

    if (this.getPayMethodsSubscribe$ && this.getPayMethodsSubscribe$.closed) {
      this.getPayMethodsSubscribe$.unsubscribe();
    }

    if (this.getTenantInfoSubscribe$ && this.getTenantInfoSubscribe$.closed) {
      this.getTenantInfoSubscribe$.unsubscribe();
    }
    window.removeEventListener("beforeunload", (event) => {});
  }
}
