let timer;
let isStarted = false;
let secCounter = 0;
let msecCounter = 0;
let mCounter = 0;
let onStartSec;
let onStartmSec;
let onStartMinute;

//importing the states
const display = document.getElementById("timeDisplay");
console.log(display);
const startPauseBtn = document.getElementById("startPause");
const startPauseJS =
  document.getElementById("startPauseJS");

const second = document.getElementById("second");
const minute = document.getElementById("minute");
const msecond = document.getElementById("msecond");

const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapTimes = document.getElementById("lapTimes");

const start = () => {
  if (!isStarted) {
    isStarted = true;
    startPauseJS.innerHTML = "Pause";

    onStartSec = playSec();
    onStartmSec = playMSec();
    onStartMinute = playMinute();
    document.getElementById("btnJS").src =
      "/images/pause.png";
  } else {
    isStarted = false;
    clearInterval(onStartSec);
    clearInterval(onStartmSec);
    clearInterval(onStartMinute);
    startPauseJS.innerHTML = "Start";
    document.getElementById("btnJS").src =
      "/images/play-button-arrowhead.png";
  }
};
const playSec = () => {
  return setInterval(() => {
    if (secCounter === 59) {
      secCounter = 0;
    }
    secCounter++;
    second.innerHTML =
      secCounter < 10 ? `0${secCounter}` : secCounter;
  }, 1000);
};
const playMSec = () => {
  return setInterval(() => {
    if (msecCounter === 99) {
      msecCounter = 0;
    }
    msecCounter++;
    msecond.innerHTML =
      msecCounter < 10 ? `0${msecCounter}` : msecCounter;
  }, 10);
};
const playMinute = () => {
  return setInterval(() => {
    mCounter++;
    minute.innerHTML =
      mCounter < 10 ? `0${mCounter}` : mCounter;
  }, 60 * 1000);
};
const reset = () => {
  clearInterval(onStartSec);
  clearInterval(onStartmSec);
  clearInterval(onStartMinute);
  isStarted = false;
  secCounter = 0;
  msecCounter = 0;
  mCounter = 0;
  minute.innerHTML = "00";
  second.innerHTML = "00";
  msecond.innerHTML = "00";

  document.getElementById("btnJS").src =
    "/images/play-button-arrowhead.png";
};

const lap = () => {};
startPauseBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
