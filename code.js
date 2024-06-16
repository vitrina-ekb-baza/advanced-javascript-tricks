const result = await makeHttpRequest(url);
const lastElement = arr => arr[arr.length - 1];
const isWeekday = (date) => date.getDay() % 6 !== 0;