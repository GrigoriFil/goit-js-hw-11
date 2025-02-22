import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    
    const delay = Number(evt.currentTarget.elements.delay.value);
    const state = document.querySelector('input[name="state"]:checked').value;

    createPromise(delay, state)
        .then((data) => iziToast.success({
            message: `✅ Fulfilled promise in ${data}ms`,
            position: "topRight"
        }))
        .catch((data) => iziToast.error({
            message: `❌ Rejected promise in ${data}ms`,
            position: "topRight"
        }));

    form.reset();
}

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}
