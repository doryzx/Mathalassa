const fs = require('fs')//import read/write module
var logger = fs.createWriteStream('data.txt')
var writeLine = (line) => logger.write(`\n${line}`);
  writeLine('Data written to a new me');
  writeLine("fishdoesart was here");
  logger.end() // close string

  fs.readFile('data.txt', function (err, data) {
    console.log("Asynchronous read: " + data.toString());
 });
