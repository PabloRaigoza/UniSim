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
        this.borderWidth = 5*px;
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

        imageMode(CENTER);
        image(this.popUp.draw(), width/2, height/2);
    }

    displayRank() {

    }

    displayEdge() {
        stroke(0); strokeWeight(px*2);
        let wt = color(255);
        let bl = color(0);
        let bc = color(151,76,2); // border color
        rectMode(CENTER);

        fill(bc);
        rect(width/2,height/2,width,height);
        rect(width/2,height/2,width-2*this.borderWidth,height-2*this.borderWidth);
    
        // top left corner
        setPixel(0,0,wt);
        setPixel(0,1,wt);
        setPixel(0,2,wt);
        setPixel(1,0,wt);
        setPixel(2,0,wt);
        setPixel(1,1,wt);
        setPixel(1,2,bl);
        setPixel(2,1,bl);
        setPixel(4,4,bc);

        // top right corner
        setPixel(99,0,wt);
        setPixel(98,0,wt);
        setPixel(97,0,wt);
        setPixel(99,1,wt);
        setPixel(99,2,wt);
        setPixel(98,1,wt);
        setPixel(98,2,bl);
        setPixel(97,1,bl);
        setPixel(95,4,bc);

        // bottom left
        setPixel(0,99,wt);
        setPixel(0,98,wt);
        setPixel(1,98,wt);
        setPixel(2,99,wt);
        setPixel(0,97,wt);
        setPixel(1,99,wt);
        setPixel(1,97,bl);
        setPixel(2,98,bl);
        setPixel(4,95,bc);

        // bottom right
        setPixel(99,99,wt);
        setPixel(99,98,wt);
        setPixel(98,98,wt);
        setPixel(97,99,wt);
        setPixel(97,98,bl);
        setPixel(98,97,bl);
        setPixel(98,99,wt);
        setPixel(99,97,wt);
        setPixel(95,95,bc);
    }

    displayCampus() {
        this.c.background(200);

        this.c.noStroke();
        this.c.rectMode(CENTER);
        let bottom = 0.05*width;
        this.c.fill(128);
        this.c.rect(this.c.width/2, this.c.height-bottom, this.c.width, bottom*2);
        
        this.c.stroke(0);
        this.c.fill(0);
        this.c.strokeWeight(0.5); fill(50);
        this.c.textFont('Courier New');
        this.c.textSize(SM);
        this.c.textAlign(LEFT, CENTER);
        this.c.textStyle(NORMAL);
        this.c.text('Endowment(10% ann.): '+toDollar(uni.endow), 5,this.c.height-bottom);



        imageMode(CENTER);
        image(this.c,width/2,height/2);
    }
    
    displayGlass() {        
        fill(149,185,240,60);
        noStroke();
        rectMode(CENTER);
        rect(width/2,height/2,width-2*this.borderWidth,height-2*this.borderWidth);
        fill(255,255,255,80);
        
        let stripe = (x, y, count) => {
            for (let i = 0; i < count; i++) {
                rect(x+px*i,y-px*i,px,px);
            }
        }

        stripe(0.2*width, 0.2*width, 5);
        stripe(0.4*width, 0.15*width, 3);
        stripe(0.5*width, 0.75*width, 6);
        stripe(0.3*width, 0.6*width, 2);
        stripe(0.75*width, 0.3*width, 8);
        stripe(0.85*width, 0.65*width, 4);
        stripe(0.15*width, 0.45*width, 2);
        stripe(0.55*width, 0.25*width, 3);
        stripe(0.40*width, 0.45*width, 5);

    }

    drawScreen() {
        this.displayEdge();
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

        // this.displayGlass();
    }

    displayMode(newMode) {
        this.mode = newMode;
    }
}



function setup() {
    // let wid = 0.9 * min(window.innerWidth, 1080);
    let wid = ((window.innerHeight < window.innerWidth) ? 0.7 : 0.9) * min(window.innerWidth, window.innerHeight);
    // console.log(window.innerHeight);
    // console.log(window.innerWidth);
    createCanvas(wid, wid);
    px = 0.01*wid;

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
    rectMode(CORNER);
    rect(x*px, y*px, px+0.2, px+0.2);
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

