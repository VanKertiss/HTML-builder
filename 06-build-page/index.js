const fs = require('fs');
const dir = __dirname;
const oldAssets = dir + '/assets';
const newAssets = dir + '/project-dist';


fs.mkdir(newAssets, {
  recursive: true
}, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

const copyAssets = (oldAssets) => {
  fs.readdir(oldAssets,
    (err, files) => {
      if (err) {
        console.log(err);
      }

      fs.stat(oldAssets, (err, stats) => {
        for (let i = 0; i < files.length; i++) {
          if (stats.isDirectory(files[i]) === true) {
            console.log(oldAssets);
            copyAssets(oldAssets + '/' + files[i]);
          }

        }
      });
    });
};

copyAssets(oldAssets);
