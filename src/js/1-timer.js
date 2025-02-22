import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let timerId = null;
let selectedDate = null;

startBtn.disabled = true;

flatpickr(dateInput, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            iziToast.info({
                position: 'topRight', 
                message: 'Please choose a date in the future',
            });
            startBtn.disabled = true;
        } else {
            selectedDate = selectedDates[0];
            startBtn.disabled = false;
        }
    },
});

startBtn.addEventListener('click', () => {
    timerId = setInterval(updateTimer, 1000);
    startBtn.disabled = true;
    dateInput.disabled = true;
});

function updateTimer() {
    const diff = selectedDate - new Date();
    if (diff <= 0) {
        clearInterval(timerId);
        dateInput.disabled = false;
        startBtn.disabled = true;
        updateDisplay(0, 0, 0, 0);
        return;
    }
    const { days, hours, minutes, seconds } = convertMs(diff);
    updateDisplay(days, hours, minutes, seconds);
}

function updateDisplay(days, hours, minutes, seconds) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    return {
        days: Math.floor(ms / day),
        hours: Math.floor((ms % day) / hour),
        minutes: Math.floor(((ms % day) % hour) / minute),
        seconds: Math.floor((((ms % day) % hour) % minute) / second),
    };
}
