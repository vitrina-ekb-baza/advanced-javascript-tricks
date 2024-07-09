console.log("1 || 2 = "+(1 || 2));
const arrayContains = (arr, element) => arr.includes(element);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');