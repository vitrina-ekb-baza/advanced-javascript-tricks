const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;