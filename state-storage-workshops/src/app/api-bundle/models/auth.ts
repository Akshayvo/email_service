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


export class ChangePassword {
  strOldPassword: string;
  strNewPassword: string;
  intErrorCode: number;


  constructor(strOldPassword: string, strNewPassword: string, intErrorCode: number) {
    this.strNewPassword = strNewPassword;
    this.strOldPassword = strOldPassword;
    this.intErrorCode = intErrorCode;
  }
}
