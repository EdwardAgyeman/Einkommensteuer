let zvE = document.getElementById("zvE");
let ESt = document.getElementById("ergebnis");
let y;
let x;
let z;
let jahr = document.getElementById("jahr");
let tarif =document.getElementById("tarif")

// -----------------------------------------------------
function EStBerechnung(){
    if (jahr.value == 2020) {
        berechnungESt2020()
    }
    else if (jahr.value == 2019) {
        berechnungESt2019()
    }
    else if (jahr.value == 2018) {
        berechnungESt2018()
    }
}
// -----------------------------------------------------
function berechnungESt2020() {

    if (zvE.value <= 9408) {
        ESt.innerHTML = 0;
    }

    else if (zvE.value >= 9409 && zvE.value <= 14532) {
        y = (zvE.value-9408)/10000;
        ESt.innerHTML=(972.87*y+1400)*y;
    }

    else if (zvE.value >= 14533 && zvE.value <= 57051) {
        z=(zvE.value-14532)/10000;
        ESt.innerHTML=(212.02*z+2397)*z+972.79;
    }

    else if (zvE.value >= 57052 && zvE.value <= 270500) {
        ESt.innerHTML=0.42*zvE.value-8963.74;
    }

    else if (zvE.value >= 270501) {
        ESt.innerHTML=0.45*zvE.value-17078.74;
    }
}
// -----------------------------------------------------
function berechnungESt2019() {

    if (zvE.value <= 9168) {
        ESt.innerHTML = 0;
    }
    else if (zvE.value >= 9169 && zvE.value <= 14254) {
        y = (zvE.value-9168)/10000;
        ESt.innerHTML=(980.14*y+1400)*y;
    }
    else if (zvE.value >= 14255 && zvE.value <= 55960) {
        z=(zvE.value-14254)/10000;
        ESt.innerHTML=(212.16*z+2397)*z+965.58;
    }
    else if (zvE.value >= 55961 && zvE.value <= 265326) {
        ESt.innerHTML=0.42*zvE.value-8780.90;
    }
    else if (zvE.value >= 265327) {
        ESt.innerHTML=0.45*zvE.value-16740.68;
    }
}
// -----------------------------------------------------
function berechnungESt2018() {

    if (zvE.value <= 9000) {
        ESt.innerHTML = 0;
    }
    else if (zvE.value >= 9001 && zvE.value <= 13996) {
        y = (zvE.value-9000)/10000;
        ESt.innerHTML=(997.80*y+1400)*y;
    }
    else if (zvE.value >= 13997 && zvE.value <= 54949) {
        z=(zvE.value-13996)/10000;
        ESt.innerHTML=(220.13*z+2397)*z+948.49;
    }
    else if (zvE.value >= 54950 && zvE.value <= 260532) {
        ESt.innerHTML=0.42*zvE.value-8621.75;
    }
    else if (zvE.value >= 260533) {
        ESt.innerHTML=0.45*zvE.value-16437.70;
    }
}