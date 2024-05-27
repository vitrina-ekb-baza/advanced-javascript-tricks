const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isEven = (num) => num % 2 === 0;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;