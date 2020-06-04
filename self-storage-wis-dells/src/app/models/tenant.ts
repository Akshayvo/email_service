export class ObjTenantDetail {
  objTenant: ObjTenant;

  constructor(objTenant: ObjTenant) {
    this.objTenant = objTenant;
  }
}

export class ObjTenant {
  FirstName: string;
  LastName: string;
  Phone: string;
  EmailAddress: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  State: string;
  ZIP: string;
  DriversLicense: string;
  DriversLicenseExpDate: Date;
  DateOfBirth: Date;
  AlternateAddressLine1: string;
  AlternateAddressLine2: string;
  AlternateCity: string;
  AlternateFirstName: string;
  AlternateLastName: string;
  AlternatePhone: string;
  AlternateState: string;
  AlternateZIP: string;

  constructor(
    FirstName: string,
    LastName: string,
    Phone: string,
    EmailAddress: string,
    AddressLine1: string,
    AddressLine2: string,
    City: string,
    State: string,
    ZIP: string,
    DriversLicense: string,
    DriversLicenseExpDate: Date,
    DateOfBirth: Date,
    AlternateAddressLine1: string,
    AlternateAddressLine2: string,
    AlternateCity: string,
    AlternateFirstName: string,
    AlternateLastName: string,
    AlternatePhone: string,
    AlternateState: string,
    AlternateZIP: string,
  ) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Phone = Phone;
    this.EmailAddress = EmailAddress;
    this.AddressLine1 = AddressLine1;
    this.AddressLine2 = AddressLine2,
    this.City = City;
    this.State = State;
    this.ZIP = ZIP;
    this.DriversLicense = DriversLicense;
    this.DriversLicenseExpDate = DriversLicenseExpDate;
    this.DateOfBirth = DateOfBirth;
    this.AlternateAddressLine1 = AlternateAddressLine1;
    this.AlternateAddressLine2 = AlternateAddressLine2;
    this.AlternateCity = AlternateCity;
    this.AlternateFirstName = AlternateFirstName;
    this.AlternateLastName = AlternateLastName;
    this.AlternatePhone = AlternatePhone;
    this.AlternateState = AlternateState;
    this.AlternateZIP = AlternateZIP;
  }
}


export class TenantInfo {
  tenant: Tenant;

  constructor( tenant: Tenant) {
    this.tenant = tenant;
  }
}

export class Tenant {
  Balance: number;
  Name: string;
  IsAutoPaymentsEnabled: boolean;
  LastPaymentOn: Date;
  LastPaymentAmount: number;
  UnpaidAR: UnpaidAR;

  constructor(Balance: number,
    Name: string,
    IsAutoPaymentsEnabled: boolean,
    LastPaymentOn: Date,
    LastPaymentAmount: number,
    unpaidAR: UnpaidAR) {

    this.Balance = Balance;
    this.Name = Name;
    this.IsAutoPaymentsEnabled = IsAutoPaymentsEnabled;
    this.LastPaymentOn = LastPaymentOn;
    this.LastPaymentAmount = LastPaymentAmount;
    this.UnpaidAR = unpaidAR;
  }
}

export class UnpaidAR {
  FromDate: string;
  ToDate: string;
  Description: string;
  Amount: number;
  AmountOwed: number;
  demoAmountOwed: number;
  Comments: string;

  constructor(
    FromDate: string,
    ToDate: string,
    Description: string,
    Amount: number,
    AmountOwed: number,
    demoAmountOwed: number,
    Comments: string
  ) {
    this.FromDate = FromDate;
    this.ToDate = ToDate;
    this.Description = Description;
    this.Amount = Amount;
    this.AmountOwed = AmountOwed;
    this.demoAmountOwed = demoAmountOwed;
    this.Comments = Comments;
  }
}


export class StrTempTenantToken {
  strTempTenantToken: string;

  constructor(strTempTenantToken: string) {
    this.strTempTenantToken = strTempTenantToken;
  }
}
