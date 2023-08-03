function setup() {
    let wid = ((window.innerHeight < window.innerWidth) ? 0.8 : 0.9) * min(window.innerWidth, window.innerHeight);
    createCanvas(wid, wid);

    px = 0.01*wid;
    LG = 0.08*wid;
    SM = 0.04*wid;
    interface = new UI('grid-container');
    screen = new Screen();

    // interface.addTab('BEGIN!', 'begin-button', startGame, true);
    interface.addTab('View Rankings', 'view-rank', viewRank);
    interface.addTab('View Campus', 'view-campus', viewCampus);
    interface.addTab('Lower Tuition', 'lower-tuition', lowerTuition, false, toDollar(LOWER_TUITION));
    interface.addTab('Raise Tuition', 'raise-tuition', raiseTuition, false, toDollar(RAISE_TUITION));
    interface.addTab('Invest in Research', 'invest-research', investRes, false, toDollar(INIT_INVEST_RES_COST));
    interface.addTab('Professor Bonus', 'prof-bonus', profBonus, false, toDollar(INIT_BONUS_PROF_COST));
    interface.addTab('Renovate Stadium', 'invest-sport', investSport, false, toDollar(INIT_SPORTS_COST));
    interface.addTab('Hire Professors (+5)', 'hire-prof', hireProf, false, toDollar(INIT_HIRE_PROF_COST));
    interface.addTab('Buy Graduate Program', 'buy-grad', buyGrad, false, toDollar(GRAD_COST));

    if(ENABLE_POPUPS) screen.pushPopUp(PopUps.startGame, interface);    
}

function draw() {
    background(255);
    screen.drawScreen();
    updateTime();
}

function setPixel(x, y, c) {
    noStroke();
    fill(c);
    rectMode(CENTER);
    rect(x*px+px/2, y*px+px/2, px+0.4, px+0.4);
}

function updateTime() {
    // if (frameCount % 6 == 0 && screen.popUp == null) {
    if (frameCount % 60 == 0 && screen.popUp == null) {
        time.month++;
        if (time.month > TIME.DEC) {
            time.year++;
            time.month = TIME.JAN;
        }

        if (time.month == TIME.JAN) updateCosts();
        else if (time.month == TIME.MAR) marchMadness();
        else if (time.month == TIME.APR) admissions();
        else if (time.month == TIME.MAY) graduation();
        else if (time.month == TIME.JUL) endowmentInterest();
        else if (time.month == TIME.AUG) chargeTuition();
    }
}

function lowerTuition() {
    uni.tuition = max(uni.tuition-5000, 0);
}
function raiseTuition() {
    uni.tuition = min(uni.tuition+5000, MAX_TUITION);
}

function viewRank() { }
function viewCampus() { }
function hireProf() {
    if(uni.money > uni.hire_prof_cost) {
        uni.profCount+=5;
        uni.setMoney(uni.money - uni.hire_prof_cost);
        uni.setHireProfCost(uni.hire_prof_cost*1.2);
    }
}
function investRes() {
    if (uni.money > uni.invest_res_cost) {
        uni.setResQuality(uni.resQuaity + 1);
        uni.setMoney(uni.money - uni.invest_res_cost);
        uni.setInvestResCost(uni.invest_res_cost*1.2);
    }
}
function profBonus() {
    if (uni.money > uni.prof_bonus_cost) {
        uni.setSportsQuality(uni.profQuality + 0.5);
        uni.setMoney(uni.money - uni.prof_bonus_cost);
        uni.setProfBonus(uni.prof_bonus_cost*1.1);
    }
}
function investSport() {
    if (uni.money > uni.sports_cost) {
        uni.setSportsQuality(uni.sportsQuality + 5);
        uni.setMoney(uni.money - uni.sports_cost);
        uni.setSportsCost(uni.sports_cost*1.2);
    }
}
function buyGrad(id) {
    if (uni.money > GRAD_COST) {
        uni.setResQuality(uni.resQuaity + 50);
        uni.setMoney(uni.money-GRAD_COST);
    }
    interface.remove(id);
}

