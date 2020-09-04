document.body.insertAdjacentHTML('beforeEnd', 
'<div class = "container"><div class = "calendar"><div class = "month"><i class="fas fa-angle-left prev"></i><div class="date"><h1></h1><p></p></div><i class="fas fa-angle-right next"></i></div><div class="weekdays"><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div></div><div class="days"></div></div><div class = "weather"><div class = "location"><h1 class = "location-timezone"></h1></div><span class = "degree"><h2 class = "temperature-degree"></h2>&#176 C</span><div class = "temperature"><div class = "temperature-description"></div></div></div></div>');

const date = new Date();

const changeDate = () => {

const month = [
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

date.setDate(1);

document.querySelector('.date h1').innerHTML = month[date.getMonth()];
document.querySelector('.date p').innerHTML = new Date().toDateString();

let days = '';

const monthDays = document.querySelector('.days');
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const firstDayIndex = date.getDay();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
const nextDays = 7 - lastDayIndex;

for (let x = firstDayIndex; x > 1 ; x--) {
    days += `<div class = "prev-date">${prevLastDay - x + 2}</div>`;
};

if (firstDayIndex === 0) {
    for (let z = 5; z >= 0; z--) {
        days += `<div class = "prev-date">${prevLastDay - z}</div>`;
    }
};

for (let i = 1; i <= lastDay; i++) {
    if ( i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
        days += `<div class = "today">${i}</div>`;
    } else {
    days += `<div>${i}</div>`;
}
};

for (let y = 1; y <= nextDays; y++) {
    days += `<div class = "next-date">${y}</div>`;
};

monthDays.innerHTML = days;
}

document.querySelector('.prev').addEventListener('click', () => {
date.setMonth(date.getMonth() - 1);
changeDate();
});

document.querySelector('.next').addEventListener('click', () => {
date.setMonth(date.getMonth() + 1);
changeDate();
});

changeDate();
