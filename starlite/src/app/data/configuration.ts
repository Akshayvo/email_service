import { environment } from "../../environments/environment";

export const objSIMSetting = {
    objActionSetting: {
        blnAllowMoveIn: false,
        blnAllowReservation: true,
    },
    objPaymentSetting: {
        blnAllowACHPayments: true,
        blnAllowAutoPay: true,
        blnAllowCCPayments: true,
        blnAllowCancelAutoPay: true,
        blnAllowPartialPayments: true
    },
    objReservationSetting: {
        blnHideGateAccessCode: false,
    },
    objUnitSizesSetting: {
        blnReservationFee: true,
        blnClimateControl: false,
        blnShowDeposit: false,
        blnShowRate: true,
        blnShowUnavailableUnitTypes: true,
        blnShowUnitAvailability: true
    },
};
