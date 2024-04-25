const getRandomBoolean = () => Math.random() >= 0.5;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const merge = [...new Set(a.concat(b))];
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;