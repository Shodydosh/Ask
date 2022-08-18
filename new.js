'use strict';
var fs = require('fs');

let rawdata = fs.readFileSync('file.json');
let json_data = JSON.parse(rawdata);

var tasksList = [];
let mark = 0;

for(var i in json_data){
    tasksList.push([json_data[i]]);
    console.log(i);
}

let newObject = {"name": "25", "status":"25", "type":"25"}
let newTasksList = [...tasksList];
// newTasksList.splice(tasksList.length, 0, {"name": "25", "status":"25", "type":"25"});
// newTasksList.push({"name": "25", "status":"25", "type":"25"});
newTasksList.push(newObject);

fs.writeFile('file.json', JSON.stringify(newTasksList), err => {
    if(err) {
        console.log(err);
    } else {
        console.log('written');
    }
});

// let newdata = fs.readFileSync('file.json');
// let newjson_data = JSON.parse(newdata);

// var tasksList = [];

// for(var i in newjson_data){
//     tasksList.push([i, newjson_data[i]]);
// }

console.log(tasksList[0][1])
// console.log(tasksList[0][1].name)
// console.log(tasksList[2][1].name);

// var data = {}
// data.tasks = [];
// for (i=0; i <26 ; i++){
//    var obj = {
//        id: i,
//        status: 'marked',
//        type: 'business'
//    }
//    data.tasks.push(obj)
// }
// fs.writeFile ("file.json", JSON.stringify(data), function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );

//{"table":[{"id":0,"status":"marked","type":"business"},{"id":1,"status":"marked","type":"business"},{"id":2,"status":"marked","type":"business"},{"id":3,"status":"marked","type":"business"},{"id":4,"status":"marked","type":"business"},{"id":5,"status":"marked","type":"business"},{"id":6,"status":"marked","type":"business"},{"id":7,"status":"marked","type":"business"},{"id":8,"status":"marked","type":"business"},{"id":9,"status":"marked","type":"business"},{"id":10,"status":"marked","type":"business"},{"id":11,"status":"marked","type":"business"},{"id":12,"status":"marked","type":"business"},{"id":13,"status":"marked","type":"business"},{"id":14,"status":"marked","type":"business"},{"id":15,"status":"marked","type":"business"},{"id":16,"status":"marked","type":"business"},{"id":17,"status":"marked","type":"business"},{"id":18,"status":"marked","type":"business"},{"id":19,"status":"marked","type":"business"},{"id":20,"status":"marked","type":"business"},{"id":21,"status":"marked","type":"business"},{"id":22,"status":"marked","type":"business"},{"id":23,"status":"marked","type":"business"},{"id":24,"status":"marked","type":"business"},{"id":25,"status":"marked","type":"business"}]}

