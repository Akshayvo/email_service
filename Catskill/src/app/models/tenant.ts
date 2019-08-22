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


export class TenantInfo {
  tenant: Tenant;

  constructor( tenant: Tenant) {
    this.tenant = tenant;
  }
}

export class Tenant {
  Balance: number;

  constructor(Balance: number) {
    this.Balance = Balance;
  }
}
