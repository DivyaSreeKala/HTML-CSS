
//using user-defined module
var fileName = require('./script')//to include a file 
fileName.display('Remya')

//using third party module
var colors = require('colors')//colors is a third party module

console.log("hello world".trap.rainbow.inverse)

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

//built-in modules
        //os related
var osDetails = require('os')

console.log(osDetails.hostname())//DESKTOP-L2LK59V
console.log(osDetails.platform())//win32
console.log(osDetails.freemem())//8401739776
console.log(osDetails.totalmem())//17066106880


        //event related
// var buttonEvent = require('events')

//events is defined as a class so an instance of that class is to be written
const eventEmitter = require('events');
const buttonEvent = new eventEmitter()

buttonEvent.on('Danger',()=>{
    console.log("Beware you are in danger zone")
})

buttonEvent.emit('Danger')



//server is always in a listening mode (it respond when an event triggers it)

//http module

const http = require('http')

const server = http.createServer((req, res)=>{//callback is used here
        if(req.url=='/'){
                res.write('This is my home page');
                res.end();
        }
        else{
                res.write('Path not found');
                res.end();
        }
})//now the server is created

//to make the server in listening state

server.listen(3000);

