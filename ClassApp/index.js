const fs = require('fs');

fs.readFile('./input.csv', 'utf-8' ,(err, data)=>{
    if(err) console.log(err);
    console.log(data);
})