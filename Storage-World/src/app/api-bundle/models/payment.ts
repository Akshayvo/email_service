export class Payment {
  objPayment: ObjPayment;

  constructor(objPayment: ObjPayment) {
    this.objPayment = objPayment;
  }
 }

 export class ObjPayment {
  CCAccountNumber: string;
  CCAccountName: string;
  CCAccountCVV2: string;
  CCAccountBillingAddress: string;
  CCAccountZIP: string;
  CCExpirationMonth: string;
  CCExpirationYear: string;
  SignUpForAutoPay: boolean;
  PaymentAmount: number;

  constructor(
    CCAccountNumber: string,
    CCAccountName: string,
    CCAccountCVV2: string,
    CCAccountBillingAddress: string,
    CCAccountZIP: string,
    CCExpirationMonth: string,
    CCExpirationYear: string,
    SignUpForAutoPay: boolean,
    PaymentAmount: number,
  ) {
    this.CCAccountNumber = CCAccountNumber;
    this.CCAccountName = CCAccountName;
    this.CCAccountCVV2 = CCAccountCVV2;
    this.CCAccountBillingAddress = CCAccountBillingAddress;
    this.CCAccountZIP = CCAccountZIP;
    this.CCExpirationMonth = CCExpirationMonth;
    this.CCExpirationYear = CCExpirationYear;
    this.SignUpForAutoPay = SignUpForAutoPay;
    this.PaymentAmount = PaymentAmount;
  }
 }


export class PayTypes {
  lstPayTypes: LstPayTypes[];

  constructor(lstPayTypes: LstPayTypes[]) {
    this.lstPayTypes = lstPayTypes;
  }
}

export class LstPayTypes {
  PayTypeDescription: string;
  PayTypeID: number;
  IsCreditCard: boolean;

  constructor(PayTypeDescription: string,
    PayTypeID: number,
    IsCreditCard: boolean) {
    this.PayTypeDescription = PayTypeDescription;
    this.PayTypeID = PayTypeID;
    this.IsCreditCard = IsCreditCard;
  }
}


export class PayTypeForResult {
  CCApprovalCode: string;
  PaymentAmount: number;

  constructor(CCApprovalCode: string, PaymentAmount: number) {
    this.CCApprovalCode = CCApprovalCode;
    this.PaymentAmount = PaymentAmount;
  }
}
