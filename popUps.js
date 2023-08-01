function generalDraw() {
    if (frameCount % 2 == 1 && this.load < 500) {this.load++;}
    let w = 75*px;
    let g = createGraphics(w, w);
    g.rectMode(CENTER);
    g.background(253,208,156);

    g.rectMode(CENTER);
    g.noFill(); g.strokeWeight(2*px); g.stroke(1);
    g.rect(g.width/2, g.height/2, w, w);
    


    
    g.stroke(0); g.fill(0);
    g.strokeWeight(0);
    g.textAlign(CENTER, TOP);

    g.textFont('Courier New');
    g.textSize(LG);
    g.textStyle(BOLD);
    g.text(this.title, w/2, 5, w);

    g.textStyle(NORMAL);
    g.textAlign(CENTER, CENTER);
    g.textSize(SM);
    g.strokeWeight(0.5); fill(50);
    g.text(this.msg.substring(0, this.load) , w/2, w/2, w);

    return g;
}

function drawGraph(x, y, g) {
    let blu = color(90, 108, 255);
    let bl = color(0);
    let dblu = color(0, 81, 255);

    blu = color(149, 185, 240);
    dblu = color(22, 93, 239);

    
    let setPixelG = (_x, _y, c, g) => {
        _x = floor(_x); _y = floor(_y);
        g.strokeWeight(1);
        g.stroke(c);
        // g.noStroke();
        g.fill(c);
        g.rectMode(CENTER);
        if (c == dblu) {
            g.rect(_x*px+px/2, _y*px+px/2, px, px-0.4);
        }
        else
            g.rect(_x*px+px/2, _y*px+px/2, px+0.4, px+0.4);

    }
    
    for (let i = 0; i < 16; i++) {
        setPixelG(x+i, y, blu, g);
        setPixelG(x-i, y, blu, g);
    }

    for (let i = 0; i < 13; i++) {
        setPixelG(x+i+1, y-1, dblu, g);
        setPixelG(x-i-1, y-1, dblu, g);
        setPixelG(x+i+2, y-1, dblu, g);
        setPixelG(x-i-2, y-1, dblu, g);
        setPixelG(x+i+3, y-1, dblu, g);
        setPixelG(x-i-3, y-1, dblu, g);
        
        setPixelG(x+i, y-1, blu, g);
        setPixelG(x-i, y-1, blu, g);
    }

    for (let i = 0; i < 11; i++) {
        setPixelG(x+i+1, y-2, dblu, g);
        setPixelG(x-i-1, y-2, dblu, g);
        setPixelG(x+i+2, y-2, dblu, g);
        setPixelG(x-i-2, y-2, dblu, g);

        setPixelG(x+i, y-2, blu, g);
        setPixelG(x-i, y-2, blu, g);
    }

    for (let i = 0; i < 10; i++) {
        setPixelG(x+i+1, y-3, dblu, g);
        setPixelG(x-i-1, y-3, dblu, g);
        
        setPixelG(x+i, y-3, blu, g);
        setPixelG(x-i, y-3, blu, g);
    }

    for (let i = 0; i < 9; i++) {
        setPixelG(x+i+1, y-4, dblu, g);
        setPixelG(x-i-1, y-4, dblu, g);

        setPixelG(x+i, y-4, blu, g);
        setPixelG(x-i, y-4, blu, g);
    }

    for (let i = 0; i < 8; i++) {
        setPixelG(x+i+1, y-5, dblu, g);
        setPixelG(x-i-1, y-5, dblu, g);
        setPixelG(x+i+2, y-5, dblu, g);
        setPixelG(x-i-2, y-5, dblu, g);
        setPixelG(x+i+1, y-6, dblu, g);
        setPixelG(x-i-1, y-6, dblu, g);
        setPixelG(x+i+1, y-7, dblu, g);
        setPixelG(x-i-1, y-7, dblu, g);
        setPixelG(x+i+1, y-8, dblu, g);
        setPixelG(x-i-1, y-8, dblu, g);

        setPixelG(x+i, y-5, blu, g);
        setPixelG(x-i, y-5, blu, g);

        setPixelG(x+i, y-6, blu, g);
        setPixelG(x-i, y-6, blu, g);

        setPixelG(x+i, y-7, blu, g);
        setPixelG(x-i, y-7, blu, g);
    }

    for (let i = 0; i < 7; i++) {
        setPixelG(x+i+1, y-9, dblu, g);
        setPixelG(x-i-1, y-9, dblu, g);
        setPixelG(x+i+1, y-10, dblu, g);
        setPixelG(x-i-1, y-10, dblu, g);
        setPixelG(x+i+1, y-11, dblu, g);
        setPixelG(x-i-1, y-11, dblu, g);

        setPixelG(x+i, y-8, blu, g);
        setPixelG(x-i, y-8, blu, g);

        setPixelG(x+i, y-9, blu, g);
        setPixelG(x-i, y-9, blu, g);

        setPixelG(x+i, y-10, blu, g);
        setPixelG(x-i, y-10, blu, g);

        setPixelG(x+i, y-11, blu, g);
        setPixelG(x-i, y-11, blu, g);        
    }

    for (let i = 0; i < 6; i++) {
        setPixelG(x+i+1, y-12, dblu, g);
        setPixelG(x-i-1, y-12, dblu, g);

        setPixelG(x+i, y-12, blu, g);
        setPixelG(x-i, y-12, blu, g);
    }

    for (let i = 0; i < 4; i++) {
        setPixelG(x+i+1, y-13, dblu, g);
        setPixelG(x-i-1, y-13, dblu, g);
        setPixelG(x+i+2, y-13, dblu, g);
        setPixelG(x-i-2, y-13, dblu, g);

        setPixelG(x+i, y-13, blu, g);
        setPixelG(x-i, y-13, blu, g);
    }

    for (let i = 0; i < 2; i++) {
        setPixelG(x+i+1, y-14, dblu, g);
        setPixelG(x-i-1, y-14, dblu, g);
        setPixelG(x+i+2, y-14, dblu, g);
        setPixelG(x-i-2, y-14, dblu, g);
    }
    setPixelG(x, y-14, blu, g);
    setPixelG(x, y-15, dblu, g);
    setPixelG(x, y-15, dblu, g);

    for (let i = 5; i < 70; i++) {
        setPixelG(i, y, bl, g);
    }

    setPixelG(x, y-1, bl, g);
    setPixelG(x, y-2, bl, g);
    setPixelG(x, y+1, bl, g);
    setPixelG(x, y+2, bl, g);

    return g;
}

function admissionsDraw() {
    let w = width*3/4;
    let g = createGraphics(w, w);
    g.rectMode(CENTER);
    g.background(253,208,156);

    g.stroke(0); g.fill(0);
    g.strokeWeight(0);
    g.textAlign(CENTER, TOP);

    g.textFont('Courier New');
    g.textSize(LG);
    g.textStyle(BOLD);
    g.text(this.title, w/2, 5, w);

    g.textStyle(NORMAL);
    g.textAlign(CENTER, CENTER);
    g.textSize(SM);
    g.strokeWeight(0.5); fill(50);
    g.text(this.msg, w/2, w/4, w);


    let center = 47-2*screen.borderWidth/px;
    let delta = map(uni.iq, MIN_IQ, MAX_IQ, -32, 32);
    
    drawGraph(center + delta, 50, g);

    g.textAlign(CENTER, TOP);
    g.text(uni.iq, (center+delta)*px, 53*px);

    return g;
}

class PopUp {
    constructor(_title, _msg, _btnMSg, _onClick=()=>{}, _drawFunc=generalDraw) {
        this.title = _title;
        this.msg = _msg;
        this.btnMSg = _btnMSg;
        this.onClick = _onClick;
        this.load = 0;
    
        this.draw = _drawFunc;
    }
}

const PopUps = {
    startGame : new PopUp(
        'Start Game',
        'Begin your adventure to become the number one ranked university!',
        'Begin!',
        () => {
            screen.removePopUp(interface);
            screen.pushPopUp(PopUps.phdVolunteers, interface);
        }
    ),
    phdVolunteers : new PopUp(   
        'PhD Volunteers',
        'A small group of 5 PhD graduates heard you were creating a new insitition and decided to follow you. Nice!',
        'Continue',
        () => {
            uni.profCount = 5;
            screen.removePopUp(interface);
            screen.pushPopUp(PopUps.newStudents, interface);
        }
    ),
    newStudents : new PopUp(
        'Undergrad Students',
        '100 students who were rejected from all the institutions they applied to last fall decided to enroll in ' + uni.name + ' for $30,000 a year!',
        'Continue',
        () => {
            uni.studCount = 100;
            uni.studCount = 5;
            screen.removePopUp(interface);
        }
    ),
    marchMadness : new PopUp(
        'March Madness!',
        '',
        'Go ' + uni.name + '!',
        () => { screen.removePopUp(interface); }
    ),
    admissions : new PopUp(
        'Admissions',
        '',
        'Continue',
        () => { screen.removePopUp(interface); },
        admissionsDraw
    )
}
