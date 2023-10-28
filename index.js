const os = require('node:os'); 
const { EventEmitter } = require('node:stream');
const fs = require('fs')
let osType = os.type();
let osArch = os.arch();

// function ForOs(type){
//     console.log("Hello "+type)
// }

function CreateTempdirFile(systemType,systemArc){
    let fileName = systemType+"_"+systemArc+"_"+"tempdir.txt";
    fs.open(fileName, 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
      });
}
class NodeEvent extends EventEmitter{}

const event = new NodeEvent()

event.addListener("osType",CreateTempdirFile)

event.emit("osType",osType,osArch);