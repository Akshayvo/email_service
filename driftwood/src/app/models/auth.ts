export class Auth {
  strTenantToken: string;

  constructor(strTenantToken: string) {
    this.strTenantToken = strTenantToken;
  }
}

export class ForgotPassword {
  strEmailID: string;

  constructor(strEmailID: string) {
    this.strEmailID = strEmailID;
  }
}
