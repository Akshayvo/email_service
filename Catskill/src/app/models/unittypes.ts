export class UnitTypes {
    lstUnitTypes : LstUnitTypes;

    constructor(lstUnitTypes : LstUnitTypes) {
        this.lstUnitTypes = lstUnitTypes;
    }
};

export class LstUnitTypes {
    Description: string;
    MonthlyRate: number;
    
    constructor(
        Description: string,
        MonthlyRate: number
        ) {
        this.Description = Description,
        this.MonthlyRate = MonthlyRate
    }
}