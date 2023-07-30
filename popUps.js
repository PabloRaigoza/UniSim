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
        rectMode(CENTER);
        fill(253,208,156);

        let w = width*3/4;
        rect(width/2, height/2, w, height/2);

        
        stroke(0); fill(0);
        strokeWeight(0);
        textAlign(CENTER, TOP);

        textFont('Courier New');
        textSize(1.7*EM);
        textStyle(BOLD);
        text(this.title, width/2, height/4 + 5);

        textStyle(NORMAL);
        textSize(1.2*EM);
        strokeWeight(0.5); fill(50);
        text(this.msg.substring(0, this.load) , width/2, height/4 + 40, w);
    }
}

function phdVolunteersOnClick(id) {
    uni.profCount = 10;
    uni.profQuality = 5;

    screen.removePopUp(interface);
    screen.pushPopUp(PopUps.newStudents, interface);
}

function newStudentsOnClick(id) {
    uni.studCount = 100;
    uni.studCount = 5;

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
    )
}
