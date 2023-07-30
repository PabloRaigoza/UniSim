let interface;
let screen;

const DisplayMode = {
    POP_UP : 0,
    RANK : 1,
    CAMPUS : 2
}

class UI {
    constructor(_id) {
        this.id = _id;
        this.m = new Map();


        this.container = (createDiv().id(this.id)).parent(createDiv().id('par-'+this.id));
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
        this.mode = DisplayMode.CAMPUS;
        this.popUp = null;
        this.borderWidth = 20;
        this.c = createGraphics(width-2*this.borderWidth, height-2*this.borderWidth)
    }

    pushPopUp(popUp, ui) {
        if (this.popUp != null) {
            console.error('Another pop already exists!');
            return;
        }
        this.popUp = popUp;
        this.mode = DisplayMode.POP_UP;
        ui.addTab(this.popUp.btnMSg, 'pop-up', this.popUp.onClick, true);
    
        document.getElementById('pop-up').style.gridRow = '1';
    }

    removePopUp(ui) {
        this.displayMode(DisplayMode.CAMPUS);

        ui.remove('pop-up');
        this.popUp = null;
    }

    displayPopUp() {
        if (this.popUp == null) {
            console.error('There is no pop-up to display!');
            return;
        }

        this.popUp.draw();
    }

    displayRank() {

    }

    displayCampus() {
        this.c.background(200);

        this.c.noStroke();
        this.c.rectMode(CENTER);
        let bottom = 20;
        this.c.fill(128);
        this.c.rect(this.c.width/2, this.c.height-bottom, this.c.width, bottom*2);
        
        this.c.stroke(0);
        this.c.fill(0);
        this.c.textFont('Courier New');
        this.c.textSize(SM);
        this.c.textAlign(LEFT, CENTER);
        this.c.text('Endowment(10% ann.): '+toDollar(uni.endow), 5,this.c.height-bottom);



        image(this.c,this.borderWidth,this.borderWidth);
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

    displayMode(newMode) {
        this.mode = newMode;
    }
}



function setup() {
    // let wid = 0.9 * min(window.innerWidth, 1080);
    let wid = ((window.innerHeight < window.innerWidth) ? 0.7 : 0.9) * min(window.innerWidth, window.innerHeight);
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    createCanvas(wid, wid);

    LG = 0.08*wid;
    SM = 0.04*wid;
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
    updateTime();
}

function startGame(id) {
    screen.pushPopUp(PopUps.phdVolunteers, interface);

    interface.remove(id);
}

function updateTime() {
    if (frameCount % 24 == 0) {
        if (time.month > TIME.DEC) {
            time.year++;
        }
        time.month = (time.month + 1) % 12;
    }
}

function viewRank() { }
function viewCampus() { }
function investRes() { }
function investDow() { }
function profBonus() { }
function investSport() { }
function buyGrad() { }

