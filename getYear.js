var regexp  = new RegExp('{{([^}]+)}}', 'g');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');