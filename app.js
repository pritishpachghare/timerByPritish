let second = 0;
let minuts = 0;
let hours = 0;


let interval = null;
let status = "stopped"


let display_second = 0;
let display_minuts = 0;
let display_hours = 0;


function stopWatch() {
    second++;
    if (second / 60 === 1) {
        second = 0;
        minuts++;
        if (minuts / 60 === 1) {
            minuts = 0;
            hours++;
            // if (hr / 60 == 1) {
            //     hr = 0;
            // }
        }
    }
    if (second < 10) {
        display_second = "0" + second.toString();
    }
    else {
        display_second = second;
    }
    if (minuts < 10) {
        display_minuts = "0" + minuts.toString();
    }
    else {
        display_minuts = minuts;
    }

    if (hours < 10) {
        display_hours = "0" + hours.toString();
    }
    else {
        display_hours = hours;
    }


    document.getElementById('hr').innerHTML = display_hours + ":" + display_minuts + ":" + display_second;
}

function startStop() {
    if (status === "stopped") {
        interval = window.setInterval(stopWatch, 100);
        document.getElementById('start').innerHTML = "PAUSE";
        status = "started";
    }
    else {
        window.clearInterval(interval);
        document.getElementById('start').innerHTML = "START";
        status = "stopped";
    }
}


function reset() {
    second = 0;
    minuts = 0;
    hours = 0;
    document.getElementById('hr').innerHTML = "00 : 00 : 00"
}