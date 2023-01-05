var fs = require('fs');
// const fs = require('fs')//import read/write module
// import * as fs from 'fs'
function write(){
//  var logger = fs.createWriteStream('data.txt')
//  var writeLine = (line) => logger.write(`\n${line}`);
//    writeLine('Data written to a bew me');
//    writeLine("fishdoesart was here");
//    logger.end() // close string
fs.writeFile("data.txt", "HELLOOO",  function (err) {
  if (err) {
    return console.error(err);
  }});
}
 function read(){
   fs.readFile('data.txt', function (err, data) {
     console.log("Asynchronous read: " + data.toString());
  })};
write();
read();
return "hi";




 
