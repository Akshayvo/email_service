export class Auth {
  strTenantToken: string;

  constructor(strTenantToken: string) {
    this.strTenantToken = strTenantToken;
  }
}

export class ForgotPassword {
  strEmailID: string;
  intErrorCode: number;

  constructor(strEmailID: string, intErrorCode: number) {
    this.strEmailID = strEmailID;
    this.intErrorCode = intErrorCode;
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


export class VerifyCode {
    strEmailID: string;
    strPasswordToken: String;
    intErrorCode: number;

    constructor(strEmailID: string, strPasswordToken: String, intErrorCode: number) {
      this.strEmailID = strEmailID;
      strPasswordToken = strPasswordToken;
      this.intErrorCode = intErrorCode;
    }
}

export class ResetPassword {
    emailID: string;
    strPasswordToken: string;
    strOldPassword: string;
    strNewPassword: string;
    intErrorCode: number;

    constructor(
      emailID: string,
      strPasswordToken: string,
      strOldPassword: string,
      strNewPassword: string,
      intErrorCode: number,
    ) {
      this.emailID = emailID;
      this.strPasswordToken = strPasswordToken;
      this.strOldPassword = strOldPassword;
      this.strNewPassword = strNewPassword;
      this.intErrorCode = intErrorCode;
    }
}
