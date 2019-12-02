export class UnitTypes {
    lstUnitTypes: LstUnitTypes[];

    constructor(lstUnitTypes: LstUnitTypes[]) {
        this.lstUnitTypes = lstUnitTypes;
    }
}

export class LstUnitTypes {
    Description: string;
    MonthlyRate: number;
    ReservationFee: number;
    ReservationFeeTax: number;
    UnitTypeID: number;
    IsUnitsAvailable: boolean;
    IsClimateControlled: boolean;

    constructor(
        Description: string,
        MonthlyRate: number,
        ReservationFeeTax: number,
        ReservationFee: number,
        UnitTypeID: number,
        IsUnitsAvailable: boolean,
        IsClimateControlled: boolean,
        ) {
        this.Description = Description,
        this.MonthlyRate = MonthlyRate;
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

    constructor(PeriodDescription: string) {
        this.PeriodDescription = PeriodDescription;
    }
}
