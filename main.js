"use strict";
const currentDate = document.querySelector(".date");
const currentTime = document.querySelector(".time");

const date = new Date();
// const fullDate = date.toLocaleDateString();
const dayOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

currentDate.textContent = dayOfTheWeek[date.getDay()];

// function refreshTime() {
//   let fullTime = new Date().toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });
//   currentTime.textContent = fullTime;
// }

function refreshTime() {
  const dateString = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Sao_Paulo",
  });
  currentTime.innerHTML = dateString;
}

setInterval(refreshTime, 1000);

setInterval(refreshTime, 1000);


