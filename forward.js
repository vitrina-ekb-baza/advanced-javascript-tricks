const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
console.log(false == '0');