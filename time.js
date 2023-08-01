const TIME = {
    JAN : 0,
    FEB : 1,
    MAR : 2,
    APR : 3,
    MAY : 4,
    JUN : 5,
    JUL : 6,
    AUG : 7,
    SEP : 8,
    OCT : 9,
    NOV : 10,
    DEC : 11,
}

let time = {
    year : 2000,
    month : TIME.MAR
}


function timeMonth() {
    if (time.month == TIME.JAN) return 'Jan';
    else if (time.month == TIME.FEB) return 'Feb';
    else if (time.month == TIME.MAR) return 'Mar';
    else if (time.month == TIME.APR) return 'Apr';
    else if (time.month == TIME.MAY) return 'May';
    else if (time.month == TIME.JUN) return 'Jun';
    else if (time.month == TIME.JUL) return 'Jul';
    else if (time.month == TIME.AUG) return 'Aug';
    else if (time.month == TIME.SEP) return 'Sep';
    else if (time.month == TIME.OCT) return 'Oct';
    else if (time.month == TIME.NOV) return 'Nov';
    else if (time.month == TIME.DEC) return 'Dec';
    else return '';
}

function updateCosts() {
    uni.setResQuality(uni.resQuaity + uni.profCount*uni.profQuality);
    uni.setMoney(uni.money - uni.profCount*PROF_SAL);

    console.log(uni.resQuaity);
}

function marchMadness() {
    let i = 0;
    for (; i < 7; i++) {
        if (random() < uni.sportsQuality / 100) {
            continue;
        } else {
            break;
        }
    }
    
    let placing = '1st! ' + uni.name + ' has percervered through thick and thin to win it all!';
    if (i > 0) {
        if (i == 1) placing = '64th. There is no trophy for last place';
        if (i == 2) placing = '32nd. Better luck next time.';
        if (i == 3) placing = '16th. Incredible performance.';
        if (i == 4) placing = '8th, making it to the quarter finals!';
        if (i == 5) placing = '4th, making it to the semi-finals year!';
        if (i == 6) placing = '2nd. Second place is just the first place loser!';
        
        let initMsg = uni.name + ' qualified for March Madness and placed ' + placing;
        PopUps.marchMadness.msg = initMsg;
        if (ENABLE_POPUPS) screen.pushPopUp(PopUps.marchMadness, interface);
    }
}

function admissions() {
    let skillAvg = ((MAX_TUITION - uni.tuition)/1000) + uni.resQuaity + (uni.profQuality * 10) + uni.sportsQuality;
    skillAvg /= 400;
    // console.log(skillAvg);
    
    
    uni.iq = map(skillAvg, 0, 1, MIN_IQ, MAX_IQ);
    // let newStud = map(skillAvg, 0, 1, 0.5, 1)/4;
    
    uni.studCount += uni.profCount*4;

    PopUps.admissions.msg = uni.profCount*4 + ' students enrolled, with a IQ mean of ' + uni.iq + '. Acceptance rate is ' +  (1-skillAvg).toString().substring(0,5) + '%.';
    if (ENABLE_POPUPS) screen.pushPopUp(PopUps.admissions, interface);
}

function graduation() {
    uni.studCount -= uni.studCount/4;
}

function endowmentInterest() {
    uni.setMoney(uni.money+uni.endow*0.05);
    uni.endow*=1.05;
}

function chargeTuition() {
    uni.setMoney(uni.money + uni.tuition*uni.studCount);
}
