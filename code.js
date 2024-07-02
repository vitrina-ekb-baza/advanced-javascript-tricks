const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};