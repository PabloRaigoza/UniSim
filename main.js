function setup() {
    let wid = ((window.innerHeight < window.innerWidth) ? 0.8 : 0.9) * min(window.innerWidth, window.innerHeight);
    createCanvas(wid, wid);

    px = 0.01*wid;
    LG = 0.08*wid;
    SM = 0.04*wid;
    interface = new UI('grid-container');
    screen = new Screen();

    interface.addTab('BEGIN!', 'begin-button', startGame, true);
    interface.addTab('View Rankings', 'view-rank', viewRank);
    interface.addTab('View Campus', 'view-campus', viewCampus);
    interface.addTab('Invest in Research', 'invest-research', investRes);
    interface.addTab('Invest in Endowment', 'invest-endowment', investDow);
    interface.addTab('Professor Bonus', 'prof-bonus', profBonus);
    interface.addTab('Renovate Stadium', 'invest-sport', investSport);
    interface.addTab('Raise Tuition', 'raise-tuition', raiseTuition);
    interface.addTab('Lower Tuition', 'lower-tuition', lowerTuition);
    interface.addTab('Buy Graduate Program', 'buy-grad', buyGrad);

}

function draw() {
    background(255);
    screen.drawScreen();
    updateTime();
}

function startGame(id) {
    screen.pushPopUp(PopUps.phdVolunteers, interface);

    interface.remove(id);
}

function setPixel(x, y, c) {
    noStroke();
    fill(c);
    rectMode(CENTER);
    rect(x*px+px/2, y*px+px/2, px+0.4, px+0.4);
}

// function pixelRect(x, y,)

function updateTime() {
    if (frameCount % 6 == 0 && screen.popUp == null) {
    // if (frameCount % 60 == 0 && screen.popUp == null) {
        time.month++;
        if (time.month > TIME.DEC) {
            time.year++;
            time.month = TIME.JAN;
        }

        if (time.month == TIME.JUL) newJul();
        if (time.month == TIME.MAR) newMar();
        if (time.month == TIME.APR) newApr();
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
function investRes() { }
function investDow() { }
function profBonus() { }
function investSport() { }
function buyGrad() { }

