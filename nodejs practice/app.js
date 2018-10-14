
const Logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
  
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
const logger = new Logger();

logger.on('messageLogged',(arg) =>{
	console.log('Listener Called',arg);
});

logger.log('message');

const http = require('http');

const server = http.createServer((req,res)=>{
	if(req.url === '/'){
		res.write('Hello World');
		res.end();
	}
	if(req.url === '/api/courses'){
		res.write(JSON.stringify([1,2,3]));
		res.end();
	}
});

//server.on('connection', (socket) => {
//   console.log('New Connection...')
//});  

server.listen(3000);

console.log('Listening on port 3000... ');  