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
  SignUpForAutoPay: boolean;

  constructor(
    CCAccountNumber: string,
    CCAccountName: string,
    CCAccountCVV2: string,
    CCAccountBillingAddress: string,
    CCAccountZIP: string,
    SignUpForAutoPay: boolean
  ) {
    this.CCAccountNumber = CCAccountNumber;
    this.CCAccountName = CCAccountName;
    this.CCAccountCVV2 = CCAccountCVV2;
    this.CCAccountBillingAddress = CCAccountBillingAddress;
    this.CCAccountZIP = CCAccountZIP;
    this.SignUpForAutoPay = SignUpForAutoPay;
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
}
