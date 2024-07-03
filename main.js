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

const fullTime = date.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

currentTime.textContent = fullTime;
