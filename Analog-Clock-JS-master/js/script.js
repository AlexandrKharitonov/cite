﻿// Do some stuff when page hmtl page is launched
/*$(document).ready(function () {

  //$("#headerTitle").hide(300).show(1500);
  // calling show food menu function
  // showClock();
});
*/
/*----------------------------------------------------------------------------*/
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const TEXT = document.querySelector("#headerTitle");

//console.log(HOURHAND);
var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

//console.log("The curent time is: ", hr + ":" + min + ":" + sec);

// let convert hour, minute and seconds into degree to be display on the clockbox
let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runTheClock() {
  let  date = new Date();
  hrPosition += 3/360;
  minPosition += 6/60;
  secPosition += 6;
  let tmp = document.getElementById("headerTitle");
    tmp.style.fontSize = "14pt";

    if ((date.getSeconds() <= 60 && date.getSeconds() >= 50) || (date.getSeconds() >= 0 && date.getSeconds() <= 10)) {
        TEXT.innerHTML = "Время отчислений";
    } else {
        TEXT.innerHTML = "Пока не время";
    }

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// run runTheClock function every second
var interval = setInterval(runTheClock, 1000);
/*----------------------------------------------------------------------------*/
