import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataSharingService {
  locationAPIKey = {
  
    loc2: "dzJ0OFc2SjIqME46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", //28620 howard-city,
    loc3: "dzJ0OFc0SjEqME46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", //28410 ionia
    loc4: "dzJ0OFczSjIqN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", //28327 alpine
    loc5: "dzJ0OFczSjEqOE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", // 28318 red barn
    loc6: "dzJ0N1c2SjcqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", // 27675 wayland westside
    loc7: "dzJ0N1c2SjcqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", // 27673 wayland mill
    loc8: "dzJ0N1c2SjcqN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", // 27677  wayland southside
    loc9: "dzJ0N1c2SjcqMk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", // 27672 dutton
    loc10: "dzJ0OVcwSjgqMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", // 29081 m-45
    loc11: "dzJ0OVc0SjQqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", // 29443 ostego
    loc12: "dzJ0OVc0SjgqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", // 29443 ostego
    loc1: "Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O", //28787 evanston
    // Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O 28463
    // dzJ0OFc3SjgqN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O //28787 evanston
  };

  paymentSuccess: boolean;
  locationName: string;
  strConfirmation: string;
  strAccessCode: string;
  facilityLocation: string;
  verificationCode: string;
  changePassword: boolean;
  navigationTo: string;
  navigateToReserve: boolean;
  navigateToMoveIn: boolean;
  isValueUpdated: boolean;
  navigateToPrevious: string;
  paymentNavigation: string;
  periodID: number;
  period: string;
  addingTenant = false;
  insuranceChoiceId: number;
  signUpForAutoPay: boolean;
  PaymentAmount: number;
  CCApprovalCode: string;
  eventName: string;
  paymentTab: string;
  showAltDetails: boolean;
  amountToPayThankYou: number;

  apiKey = "";

  MoveInData = {
    Description: "",
    MonthlyRate: 0,
    UnitTypeID: 0,
    proRateAmount: 0,
    ProrateAmtTax: 0,
    Setup: 0,
    SetupTax: 0,
    OthDeposit: 0,
    Deposit: 0,
    DepositTax: 0,
    RateTax: 0,
    TotalTaxAmount: 0,
    TotalChargesAmount: 0,
  };

  ReservationData = {
    Description: "",
    MonthlyRate: 0,
    UnitTypeID: 0,
    RateTax: 0,
    formattedMoveInDate: "",
  };

  LstUnitTypes = {
    Description: "",
    ReservationFee: 0,
    ReservationFeeTax: 0,
    UnitTypeID: 0,
    MonthlyRate: 0,
    AnnualRate: 0,
    BiAnnualRate: 0,
    QuarterRate: 0,
  };

  objTenant = {
    FirstName: "",
    LastName: "",
    Phone: "",
    EmailAddress: "",
    AddressLine1: "",
    AddressLine2: "",
    City: "",
    State: "",
    ZIP: "",
    AlternateName: "",
    AlternatePhone: "",
    AlternateAddressLine1: "",
    AlternateAddressLine2: "",
    AlternateCity: "",
    AlternateState: "",
    AlternateZIP: "",
  };

  navLinksForComponent = {
    reservationForm: {
      next: "",
      prev: "",
    },
    confirmationData: {
      next: "",
      prev: "",
    },
    payRentForm: {
      next: "",
      prev: "",
    },
    viewRates: {
      next: "",
      prev: "",
    },
  };

  MoveIn = {
    dteMoveIn: "",
    intUnitTypeID: 0,
  };

  constructor() {
    this.getUnitData();
  }
  setTenantData(value: any) {
    this.objTenant = value;
  }

  getTenantData() {
    return this.objTenant;
  }

  setUnitData(value: any) {
    this.LstUnitTypes = value;
  }

  getUnitData() {
    return this.LstUnitTypes;
  }

  getAPIKey() {
    return this.apiKey;
  }

  initMyNavLinks = (componentName, myCurUrl) => {
    // console.log('TCL: DataSharingService -> initMyNavLinks -> this.navLinksForComponent', this.navLinksForComponent);
    if (this.navLinksForComponent[componentName]) {
      this.navLinksForComponent[componentName].next = myCurUrl;
      this.navLinksForComponent[componentName].prev = myCurUrl;
    }
  };

  getMyNavLinks = (componentName) => {
    return this.navLinksForComponent[componentName];
  };

  updateMyNavLink = (componentName, linkType, url) => {
    if (this.navLinksForComponent[componentName]) {
      if (this.navLinksForComponent[componentName][linkType]) {
        this.navLinksForComponent[componentName][linkType] = url;
      }
    }
  };

  setReservationData(value: any) {
    this.ReservationData.Description = value.Description;
    this.ReservationData.MonthlyRate = value.MonthlyRate;
    this.ReservationData.UnitTypeID = value.UnitTypeID;
  }

  getReservationData() {
    return this.ReservationData;
  }

  setMoveInData(value: any) {
    this.MoveInData.Description = value.Description;
    this.MoveInData.MonthlyRate = value.MonthlyRate;
    this.MoveInData.UnitTypeID = value.UnitTypeID;
  }

  getMoveInData() {
    return this.MoveInData;
  }
}
