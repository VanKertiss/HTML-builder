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
    if (text === 'exit') {
      console.log('Всем спасибо, все свободны...');
      return readline.close();
    }
    startWriteFile();
  });
};

const startWriteFile = () => {
  readline.question('add your text ', (text) => {

    write(text);
  });
};

startWriteFile();

writableStream.on('error', (err) => console.log(err));