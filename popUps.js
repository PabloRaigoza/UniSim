class PopUp {
    constructor(_title, _msg, _btnMSg, _img=null, _onClick=()=>{}) {
        this.title = _title;
        this.msg = _msg;
        this.btnMSg = _btnMSg;
        this.img = _img;
        this.onClick = _onClick;
        this.load = 0;
    }
    
    draw() {
        if (frameCount % 2 == 1 && this.load < 500) {this.load++;}
        let w = width*3/4;
        let g = createGraphics(w, w);
        g.rectMode(CENTER);
        // g.
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
}

function phdVolunteersOnClick(id) {
    uni.profCount = 5;

    screen.removePopUp(interface);
    screen.pushPopUp(PopUps.newStudents, interface);
}

function newStudentsOnClick(id) {
    uni.studCount = 100;
    uni.studCount = 5;

    screen.removePopUp(interface);
}

function marchMadnessOnClick(id) {
    screen.removePopUp(interface);
}

const PopUps = {
    phdVolunteers : new PopUp(   
        'PhD Volunteers',
        'A small group of 5 PhD graduates heard you were creating a new insitition and decided to follow you. Nice!',
        'Continue',
        null,
        phdVolunteersOnClick
    ),
    newStudents : new PopUp(
        'Undergrad Students',
        '100 students who were rejected from all the institutions they applied to last fall decided to enroll in ' + uni.name + ' for $30,000 a year!',
        'Continue',
        null,
        newStudentsOnClick
    ),
    marchMadness : new PopUp(
        'March Madness!',
        '',
        'Go ' + uni.name + '!',
        null,
        marchMadnessOnClick
    )
}
