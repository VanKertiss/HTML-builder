const fs = require('fs');
const dir = __dirname;
const oldFolder = dir + '/files';
const newFolder = dir + '/files-copy';


fs.mkdir(newFolder, {
  recursive: true
}, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

fs.readdir(oldFolder, {
  withFileTypes: true
}, (err, files) => {
  if (err) {
    console.log(err);
  }

  for (let i = 0; i < files.length; i++) {
    const file = `/${files[i].name}`;

    fs.copyFile(oldFolder+file, newFolder + file, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Файл успешно копирован');
    });

  }
});
