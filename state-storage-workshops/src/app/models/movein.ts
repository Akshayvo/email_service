export class MoveIn {
    dteMoveIn: Date;
    intUnitTypeID: number;

    constructor( dteMoveIn: Date, intUnitTypeID: number) {
        this.dteMoveIn = dteMoveIn;
        this.intUnitTypeID = intUnitTypeID;
    }
}

export class StrConfirmation {
    strConfirmation: string;
    strAccessCode: string;

    constructor(strConfirmation: string, strAccessCode: string) {
        this.strConfirmation = strConfirmation;
        this.strAccessCode = strAccessCode;
    }
}



export class ObjCharges {
    Rate: number;
    Setup: number;
    SecondMonthProrate: number;
    IsSecondMonthProrate: boolean;
    Deposit: number;
    OthDeposit: number;
    ProrateAmt: number;
    BillToDate: Date;
    LeaseNumber: number;
    IsTaxExempt: boolean;
    Taxable: boolean;
    ProrateTax: number;
    RateTax: number;
    SetupTax: number;
    DepositTax: number;
    InsuranceRate: number;
    InsuranceTax: number;
    InsuranceCoverageAmount: number;
    InsuranceProrate: number;
    InsuranceProrateTax: number;
    TotalTaxAmount: number;
    TotalChargesAmount: number;

    constructor(
        Rate: number,
        Setup: number,
        SecondMonthProrate: number,
        IsSecondMonthProrate: boolean,
        Deposit: number,
        OthDeposit: number,
        ProrateAmt: number,
        BillToDate: Date,
        LeaseNumber: number,
        IsTaxExempt: boolean,
        Taxable: boolean,
        ProrateTax: number,
        RateTax: number,
        SetupTax: number,
        DepositTax: number,
        InsuranceRate: number,
        InsuranceTax: number,
        InsuranceCoverageAmount: number,
        InsuranceProrate: number,
        InsuranceProrateTax: number,
        TotalTaxAmount: number,
        TotalChargesAmount: number,
    ) {
        this.Rate = Rate;
        this.Setup = Setup;
        this.SecondMonthProrate = SecondMonthProrate;
        this.IsSecondMonthProrate = IsSecondMonthProrate;
        this.Deposit = Deposit;
        this.OthDeposit = OthDeposit;
        this.ProrateAmt = ProrateAmt;
        this.ProrateTax = ProrateTax;
        this.BillToDate = BillToDate;
        this.LeaseNumber = LeaseNumber;
        this.IsTaxExempt = IsTaxExempt;
        this.Taxable = Taxable;
        this.RateTax = RateTax;
        this.SetupTax = SetupTax;
        this.DepositTax = DepositTax;
        this.InsuranceRate = InsuranceRate;
        this.InsuranceTax = InsuranceTax;
        this.InsuranceCoverageAmount = InsuranceCoverageAmount;
        this.InsuranceProrate = InsuranceProrate;
        this.InsuranceProrateTax = InsuranceProrateTax;
        this.TotalTaxAmount = TotalTaxAmount;
        this.TotalChargesAmount = TotalChargesAmount;
    }
}
