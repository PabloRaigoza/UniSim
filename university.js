class University {
    constructor(_name="You") {
        this.name = _name;
        this.studCount = 100;
        this.profCount = 5;
        
        
        this.resQuaity = 5;
        this.profQuality = 0.5;
        this.sportsQuality = 70;

        this.money = 95000;
        this.endow = 10000000;
        this.tuition = 30000;
    }

    setMoney(m) {
        this.money = m;
        document.getElementById('uni-money').textContent = toDollar(this.money);
    }
}

let uni = new University();

