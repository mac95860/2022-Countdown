const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const newYears = "1 Jan 2022";

const countdown = () => {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const get_seconds = (newYearsDate - currentDate) / 1000;
    const get_days = Math.floor(get_seconds / 3600 / 24);
    const get_hours = Math.floor(get_seconds / 3600) % 24;
    const get_minutes = Math.floor(get_seconds / 60) % 60;
    const final_seconds = Math.floor(get_seconds) % 60;

    days.innerHTML = get_days;  
    hours.innerHTML = get_hours;
    minutes.innerHTML = get_minutes;
    seconds.innerHTML = final_seconds;
}

countdown();

setInterval(countdown, 1000);