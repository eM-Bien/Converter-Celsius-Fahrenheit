const textC = document.querySelector('.c');
const textF = document.querySelector('.f');
const converter = document.querySelector('#converter');
const btnConv = document.querySelector('.convert');
const btnReset = document.querySelector('.reset');
const btnSwitch = document.querySelector('.switch');
const result = document.querySelector('.result');

const letters = /[a-z]/i;
const special = /[!@#$%^&*()]/;

let fahr;
let cels;

const degreeChanger = () => {
    if (textC.innerText === 'C') {
        textC.innerText = 'F';
        textF.innerText = 'C';
    } else {
        textC.innerText = 'C';
        textF.innerText = 'F';
    }
};

const celsToFahr = () => {
    fahr = converter.value * 1.8 + 32;
    result.innerText = `${converter.value}oC to ${fahr.toFixed(1)}oF`;
};

const fahrToCels = () => {
    cels = (converter.value - 32) / 1.8;
    result.innerText = `${converter.value}oF to ${cels.toFixed(1)}oC`;
};

const res = () => {
    result.innerText = '';
    converter.value = '';
};

const conversion = () => {
    if (converter.value.match(letters) || converter.value.match(special)) {
        result.innerText = 'To nie jest cyfra';
    } else {
        if (converter.value !== '') {
            if (textC.innerText === 'C') {
                celsToFahr();
            } else {
                fahrToCels();
            };
        } else {
            result.innerText = 'Musisz podać jakąś cyfrę';
        }
    };
};

btnConv.addEventListener ('click', conversion);
btnReset.addEventListener ('click', res);
btnSwitch.addEventListener ('click', degreeChanger);

