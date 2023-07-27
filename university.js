const TIME = {
    JAN : 0,
    FEB : 1,
    MAR : 2,
    APR : 3,
    MAY : 4,
    JUN : 5,
    JUL : 6,
    AUG : 7,
    SEP : 8,
    OCT : 9,
    NOV : 10,
    DEC : 11,
}

let time = {
    year : 2000,
    month : TIME.JAN
}


class University {
    constructor(_name="You") {
        this.name = _name;
        this.studCount = 100;
        this.studQuaity = 5;
        this.profCount = 5;
        this.profQuality = 5;
        this.money = 10000000;
        this.endow = 100000;
    }


}

let uni = new University();