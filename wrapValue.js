const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;