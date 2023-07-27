const DisplayMode = {
    POP_UP : 0,
    RANK : 1,
    CAMPUS : 2
}

class UI {
    constructor(_id) {
        this.id = _id;
        this.m = new Map();

        this.container = createDiv().id(this.id);
    }


    /**
     * 
     * @param {*} text text to be displayed
     * @param {*} id id of the tab created
     * @param {*} event event function to be called when pressed
     * @param {*} isDouble whether or not the tab spans two columns
     */
    addTab(text, id, event = () => { }, isDouble = false) {
        let p = createP(text);
        p.class(isDouble ? 'double-tab' : 'tab').id(id);
        p.parent(this.container);
        p.mousePressed(()=>event(id));

        this.m.set(id, p);
    }

    remove(id) {
        let a = this.m.get(id).remove();
    }
}

class Screen {
    constructor() {
        this.mode = DisplayMode.POP_UP;
        this.popUps = [];
    }

    addPopUp(popUp) {this.popUps.push(popUp)}

    displayPopUp() {
        
    }

    displayRank() {

    }

    displayCampus() {

    }
    
    drawScreen() {
        switch (this.mode) {
            case DisplayMode.POP_UP:
                this.displayPopUp();
                break;
            case DisplayMode.RANK:
                this.displayRank();
                break;
            case DisplayMode.CAMPUS:
                this.displayCampus();
                break;
        }
    }
}

let interface;
let screen;


function setup() {
    let wid = 0.9 * min(window.innerWidth, 1080);
    createCanvas(wid, 0.65 * wid);

    interface = new UI('grid-container');
    interface.addTab('BEGIN!', 'begin-button', startGame, true);
    interface.addTab('View Rankings', 'view-rank', viewRank);
    interface.addTab('View Campus', 'view-campus', viewCampus);
    interface.addTab('Invest in Research', 'invest-research', investRes);
    interface.addTab('Invest in Endowment', 'invest-endowment', investDow);
    interface.addTab('Professor Bonus', 'prof-bonus', profBonus);
    interface.addTab('Renovate Stadium', 'invest-sport', investSport);
    interface.addTab('Buy Graduate Program', 'buy-grad', buyGrad);

    screen = new Screen();
}

function draw() {
    background(150);
    screen.drawScreen();
}

function startGame(id) {
    screen.addPopUp()

    interface.remove(id);
}
function viewRank() { }
function viewCampus() { }
function investRes() { }
function investDow() { }
function profBonus() { }
function investSport() { }
function buyGrad() { }

