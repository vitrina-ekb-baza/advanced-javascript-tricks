const updated = numbers.filter(element => element > 6);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());