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
        this.prof_bonus_cost = INIT_BONUS_PROF_COST;
        this.invest_res_cost = INIT_INVEST_RES_COST;
        this.hire_prof_cost = INIT_HIRE_PROF_COST;
        this.iq = 100;
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
    
    changePrice(id, amt) {
        document.getElementById(id).childNodes[1].textContent = toDollar(amt);
    }

    setSportsCost(m) {
        this.sports_cost = m;
        this.changePrice('invest-sport', m);
    }

    setInvestResCost(m) {
        this.invest_res_cost = m;
        this.changePrice('invest-research', m);
    }

    setProfBonus(m) {
        this.prof_bonus_cost = m;
        this.changePrice('prof-bonus', m);
    }

    setHireProfCost(m) {
        this.hire_prof_cost = m;
        this.changePrice('hire-prof', m)
    }
}

let uni = new University();

