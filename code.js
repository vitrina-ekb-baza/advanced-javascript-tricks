const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const updated = numbers.filter(element => element > 6);