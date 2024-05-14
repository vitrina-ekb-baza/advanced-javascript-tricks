const timeFromDate = date => date.toTimeString().slice(0, 8);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
var c = new Counter(); c.add(); c.add(); c.add();