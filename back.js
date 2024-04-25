const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const results = await Promise.all(resultingPromises);
[foo, bar] = [bar, foo];
const arrayContains = (arr, element) => arr.includes(element);