(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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




 

},{"fs":1}]},{},[2]);
