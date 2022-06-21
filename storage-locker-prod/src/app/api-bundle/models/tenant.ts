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
  DriversLicenseExpDate: string;
  DateOfBirth: string;
  MilitaryType: MilitaryType;
  MilitaryBranch: MilitaryBranch
  MilitaryID: string;
  DeployedUntil: string;
  MilitaryDivision: string;
  CommandingOfficer: string;
  CommandingOfficerPhone: string;

  constructor(
    FirstName: string,
    LastName: string,
    Phone: string,
    EmailAddress: string,
    AddressLine1: string,
    AddressLine2: string,
    City: string,
    State: string,
    ZIP: string
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
  }
}


export class MilitaryType {
  militaryType: MilitaryType;

  constructor(militaryType: MilitaryType) {
    this.militaryType = militaryType;
  }

}

export class MilitaryBranch {
  militaryBranch: MilitaryBranch;

  constructor(militaryBranch: MilitaryBranch ) {
    this.militaryBranch = militaryBranch;
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
  amountOwed: number;
  Comments: string;

  constructor(
    FromDate: string,
    ToDate: string,
    Description: string,
    Amount: number,
    AmountOwed: number,
    amountOwed: number,
    Comments: string
  ) {
    this.FromDate = FromDate;
    this.ToDate = ToDate;
    this.Description = Description;
    this.Amount = Amount;
    this.AmountOwed = AmountOwed;
    this.amountOwed = amountOwed;
    this.Comments = Comments;
  }
}


export class StrTempTenantToken {
  strTempTenantToken: string;
  intErrorCode: number;

  constructor(strTempTenantToken: string) {
    this.strTempTenantToken = strTempTenantToken;
  }
}
