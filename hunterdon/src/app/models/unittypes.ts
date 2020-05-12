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
    DepositAmount: number;

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
        DepositAmount: number,
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
        this.DepositAmount = DepositAmount;
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

    constructor(PeriodDescription: string) {
        this.PeriodDescription = PeriodDescription;
    }
}
