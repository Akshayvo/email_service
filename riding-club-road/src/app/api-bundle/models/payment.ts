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
  ACHBankAccountNumber: string;
  ACHBankRoutingNumber: string

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
    ACHBankRoutingNumber: string,
    ACHBankAccountNumber: string,
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
    this.ACHBankRoutingNumber = ACHBankRoutingNumber;
    this.ACHBankAccountNumber = ACHBankAccountNumber;
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
