const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;