
const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

var pathObj = path.parse(__filename);
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

const files1 = fs.readdirSync('./');
console.log(files);

fs.readdir('./',function(err,files){
  if (err) console.log('Error',err);
  else console.log('Result',files);
});

console.log(`Total Memory: ${totalMemory}`);
console.log(`free Memory: ${freeMemory}`);

console.log(pathObj);
logger.log('message');