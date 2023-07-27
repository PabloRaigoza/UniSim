class PopUp {
    constructor(_title, _msg, _img=null, onClick=()=>{}) {
        this.title = _title;
        this.msg = _msg;
        this.img = _img;
        this.backgroundColor = new Color(255,200,0);
    }

    draw() {
        rectMode(CENTER);
        fill(this.backgroundColor);
        rect(width/2, height/2, width/2, height/2);
    }
}

const PopUps = {
    phdVolunteers : new PopUp(
        'PhD Volunteers',
        'Some new PhD graduates heard you were creating a '
    )
}