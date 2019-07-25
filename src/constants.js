class Messages {
    static get CONSTRUCTOR_ERR_MSG_01() { return 'Players must be between 2 and 8' };
}


class Players {
    static get P_CAR() { return 'Car' };
    static get P_HORSE() { return 'Horse' };
    static get P_TOWER() { return 'Tower' };
}


class Board {
    static get LAND_ON_GO_REWARD() { return 200 };
    static get POS_GO() { return 0 };
    static get POS_GO_TO_JAIL() { return 30 };
    static get POS_INCOME_TAX() { return 4 };
    static get POS_JUST_VISITING() { return 10 };
    static get POS_LUXURY_TAX() { return 38 };
    static get TOTAL_POSITIONS() { return 40 };
}


module.exports = { Messages, Players, Board };
