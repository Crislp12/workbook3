const costButton = document.getElementById('placeholderButton');
const option1 = document.getElementById('electric');
const option2 = document.getElementById('gps');
const option3 = document.getElementById('roadside');
const days = document.getElementById('numberDays');
const yesRadio = document.getElementById('yes');
const noRadio = document.getElementById('no');

// Total price show
const price1 = document.getElementById('price1');
const price2 = document.getElementById('price2');
const price3 = document.getElementById('price3');
const price4 = document.getElementById('price4');

let options = 0; //
let under25 = 0;
let car = 0; //
let total = 0;

costButton.addEventListener('click', () => {
  car = 29.99 * Number(days.value); // 49.99

  if (option1.checked) {
    options += 3.95 * Number(days.value);

    console.log(options.toFixed(2));
  }

  if (option2.checked) {
    options += 2.95 * Number(days.value);
    console.log(options.toFixed(2));
  }

  if (option3.checked) {
    options += 2.95 * Number(days.value);
    console.log(options.toFixed(2));
  }

  price1.innerText = car;
  price2.innerText = options;

  if (yesRadio.checked) {
    price3.innerText = (car * 0.3).toFixed(2);
    car = (car + car * 0.3).toFixed(2);
  } else {
    price3.innerText = '0.00';
  }

  price4.innerText = (Number(car) + Number(options)).toFixed(2);

  options = 0; //
  under25 = 0;
  car = 0; //
  total = 0;
});
