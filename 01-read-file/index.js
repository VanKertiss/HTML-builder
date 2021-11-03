const fs = require("fs");
 
// асинхронное чтение
fs.readFile("./01-read-file/text.txt", "utf8", 
            function(error,data){
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});
 
