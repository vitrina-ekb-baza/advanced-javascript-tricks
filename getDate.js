const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const scriptRootPath = path.join(repositoryRootPath, 'script');