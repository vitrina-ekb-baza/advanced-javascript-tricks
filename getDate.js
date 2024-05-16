const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));