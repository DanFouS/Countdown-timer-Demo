const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelector(".deadline-format h4");

let futureDate = new Date(2021, 1, 1, 11, 30, 0);
// let futureDate = new Date();
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}:${seconds}am`;

// future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // Calculate all valus
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, i) {
    item.innerHTML = format(values[i]);
  });
}

getRemainingTime();
