const scriptRootPath = path.join(repositoryRootPath, 'script');
const channel = getChannel(computedAppVersion);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());