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
    UnitTypeID: number;
    WebRate: number;

    constructor(
        Description: string,
        MonthlyRate: number,
        ReservationFee: number,
        UnitTypeID: number,
        WebRate: number
        ) {
        this.Description = Description,
        this.MonthlyRate = MonthlyRate;
        this.ReservationFee = ReservationFee;
        this.UnitTypeID = UnitTypeID;
        this.WebRate = WebRate;
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
