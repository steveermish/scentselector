var electronInstaller = require('electron-winstaller');
resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: '/scentselector/releases/scentselector-win32-x64',
    outputDirectory: '/scentselector/releases/installer',
    authors: 'Steve Ermish',
    exe: 'scentselector.exe',
    setupExe: 'Scentselector Installer.exe',
    certificateFile: '/scentair.pfx'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));