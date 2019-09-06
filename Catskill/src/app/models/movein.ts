export class MoveIn {
    dteMoveIn: Date;
    intUnitTypeID: number;

    constructor( dteMoveIn: Date, intUnitTypeID: number) {
        this.dteMoveIn = dteMoveIn;
        this.intUnitTypeID = intUnitTypeID;
    }
}


export class MoveInResponse {
    strConfirmation: string;

    constructor(strConfirmation: string) {
        this.strConfirmation = strConfirmation;
    }
}