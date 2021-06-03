export class UnitTypes {
    lstUnitTypes: LstUnitTypes[];

    constructor(lstUnitTypes: LstUnitTypes[]) {
        this.lstUnitTypes = lstUnitTypes;
    }
}

export class LstUnitTypes {
    Description: string;
    MonthlyRate: number;
    DailyRate: number;
    AnnualRate: number;
    BiAnnualRate: number;
    QuarterRate: number;
    ReservationFee: number;
    ReservationFeeTax: number;
    UnitTypeID: number;
    IsUnitsAvailable: boolean;
    IsClimateControlled: boolean;
    IsOutdoor:boolean;

    constructor(
        Description: string,
        MonthlyRate: number,
        DailyRate: number,
        AnnualRate: number,
        BiAnnualRate: number,
        QuarterRate: number,
        ReservationFeeTax: number,
        ReservationFee: number,
        UnitTypeID: number,
        IsUnitsAvailable: boolean,
        IsClimateControlled: boolean,
        ) {
        this.Description = Description,
        this.MonthlyRate = MonthlyRate;
        this.DailyRate = DailyRate;
        this.AnnualRate = AnnualRate;
        this.BiAnnualRate = BiAnnualRate;
        this.QuarterRate = QuarterRate;
        this.ReservationFeeTax  = ReservationFeeTax;
        this.ReservationFee = ReservationFee;
        this.UnitTypeID = UnitTypeID;
        this.IsUnitsAvailable = IsUnitsAvailable;
        this.IsClimateControlled = IsClimateControlled;
    }
}


export class RentalPeriod {
    lstRentalPeriods: LstRentalPeriods[];

    constructor(lstRentalPeriods: LstRentalPeriods[]) {
        this.lstRentalPeriods = lstRentalPeriods;
    }
}

export class LstRentalPeriods {
    PeriodDescription: string;
    PeriodID: number;

    constructor(PeriodDescription: string, PeriodID: number) {
        this.PeriodDescription = PeriodDescription;
        this.PeriodID = PeriodID;
    }
}

export class InsuranceChoice {
    lstInsuranceChoices: LstInsuranceChoices[];
    blnSuccess: boolean;

    constructor(lstInsuranceChoices: LstInsuranceChoices[], blnSuccess: boolean) {
        this.lstInsuranceChoices = lstInsuranceChoices;
        this.blnSuccess = blnSuccess;
    }
}

export class LstInsuranceChoices {
    InsuranceChoiceID: number;
    CoverageDescription: string;
    Premium: number;
    ActualCoverageAmount: number;

    constructor(
        InsuranceChoiceID: number,
        CoverageDescription: string,
        Premium: number,
        ActualCoverageAmount: number
    ) {
        this.InsuranceChoiceID = InsuranceChoiceID;
        this.CoverageDescription =  CoverageDescription;
        this.Premium = Premium;
        this.ActualCoverageAmount = ActualCoverageAmount;
    }
}
