const fs = require('fs');
const dir = __dirname + '/styles/';
const path = require('path');


fs.writeFile('./05-merge-styles/project-dist/bundle.css', '', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  
});

fs.readdir(dir, {
  withFileTypes: true
}, (err, files) => {
  if (err) {
    console.log(err);
  }

  for (let i = 0; i < files.length; i++) {
    const cssCheker = path.extname(files[i].name);
    if (cssCheker === '.css') {
      const stream = new fs.ReadStream(`./05-merge-styles/styles/${files[i].name}`, {
        encoding: 'utf-8'
      });

      stream.on('readable', () => {
        let data = stream.read();
        if (data !== null){
          reedCSS(data.toString());
        }
        
      });
      const reedCSS = (data) => {
        fs.appendFile('./05-merge-styles/project-dist/bundle.css', data, function(error){
          if (error) throw error; // если возникла ошибка
        });
      };

    }
  }
});
