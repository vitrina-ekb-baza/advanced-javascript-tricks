console.log(1 +  +"2" + "2");
const merge = (a, b) => [...a, ...b];
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
console.log(+"1" +  "1" + "2");
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;