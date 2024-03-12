let lampje = document.querySelector("#bulb");
let lampStatus = false;
let knipperlichtStatus = false;
let intervalKnipperlicht;

console.log(lampje);
//lampje.src = "img/bulb_on.jpg";
/*
function lichtKnop(){
    lampje.src = "img/bulb_on.jpg"
}*/
function lichtKnop(){
    lampje.src = "img/bulb_on.jpg"
    if (lampStatus == true){
        lampje.src = "img/bulb_off.jpg"
        lampStatus = false;
    } else {
        lampje.src = "img/bulb_on.jpg"
        lampStatus = true;
    }
}
//lampje.addEventListener('click', lichtKnop)

function knipperlicht(){
    if(lampStatus == false) {
        setInterval(lichtKnop, 500);
        console.log("start interval");
    }
}
lampje.addEventListener('click', knipperlicht)
/*
function schakelKnipperlicht(){
    if(knipperlichtStatus==false) {
        intervalKnipperlicht = setInterval(lichtKnop, 500);
        knipperlichtStatus = true;
        console.log("start interval");
    } else {
        clearInterval(intervalKnipperlicht);
        console.log("stop interval");
        knipperlichtStatus = false;
    }
}
*/
//lampje.addEventListener('click', schakelKnipperlicht)