const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


let writableStream = fs.createWriteStream(
  './02-write-file/data.txt'
);

const write = (text) => {

  fs.appendFile('./02-write-file/data.txt', text, function (error) {
    if (error) throw error; // если возникла ошибка

    startWriteFile();
  });
};

const startWriteFile = () => {
  readline.question('add your text ', (text) => {

    if (text === 'exit') {
      console.log('Всем спасибо, все свободны...');
      return readline.close();
    }
    process.on('SIGINT', function () {
      console.log('Caught interrupt signal');

      // eslint-disable-next-line no-undef
      if (i_should_exit) {
        console.log('Всем спасибо, все свободны...');

        process.exit();
      }
    });


    write(text);
  });
};

startWriteFile();

writableStream.on('error', (err) => console.log(err));