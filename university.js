class University {
    constructor(_name="You") {
        this.name = _name;
        this.studCount = 100;
        this.profCount = 5;
        
        
        this.resQuaity = 5;
        this.profQuality = 0.5;
        this.sportsQuality = 70;

        this.money = 600000;
        this.endow = 10000000;
        this.tuition = 30000;
        this.sports_cost = INIT_SPORTS_COST;
        this.prof_cost = INIT_PROF_COST;
        this.invest_res_cost = INIT_INVEST_RES_COST;
    }

    setMoney(m) {
        this.money = m;
        document.getElementById('uni-money').textContent = toDollar(this.money);
    }

    setResQuality(m) {
        this.resQuaity = min(100, m);
    }

    setSportsQuality(m) {
        this.sportsQuality = min(100, m);
    }

    setProfQuality(m) {
        this.profQuality = min(100, m);
    }
    
    setSportsCost(m) {
        this.sports_cost = m;
        document.getElementById('invest-sport').childNodes[1].textContent = toDollar(m);
    }

    setInvestResCost() {
        this.invest_res_cost = m;
    }
}

let uni = new University();

