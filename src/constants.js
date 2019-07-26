class Messages {
    static get CONSTRUCTOR_ERR_MSG_01() { return 'Players must be between 2 and 8' };
}


class Players {
    static get P_CAR() { return 'Car' };
    static get P_HORSE() { return 'Horse' };
    static get P_TOWER() { return 'Tower' };
}


class Board {
    static get INCOME_TAX_ABS() { return 200 };
    static get INCOME_TAX_PERC() { return 0.1 };
    static get LAND_ON_GO_REWARD() { return 200 };
    static get LUXURY_TAX() { return 75 };
    static get POSITIONS() {
        return {
            GO: 0,
            GO_TO_JAIL: 30,
            INCOME_TAX: 4,
            JUST_VISITING: 10,
            LUXURY_TAX: 38
        }
    };
    static get TOTAL_POSITIONS() { return 40 };
}


module.exports = { Messages, Players, Board };
