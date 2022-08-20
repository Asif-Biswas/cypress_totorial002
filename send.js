
// // var shell = require('shelljs');

// // shell.echo('hello world');
// // shell.exec('node --version');
// var execSync = require('child_process').execSync;
// var cmd = "node send2.js";

// var options = {
//   encoding: 'utf8'
// };

// console.log(execSync(cmd, options));


// setTimeout(() => {
//     console.log('timeout');
// }, 25000);





// read the results.json file and send it to the server

const axios = require('axios');
var fs = require('fs');
var results = JSON.parse(fs.readFileSync('./results.json', 'utf8'));
// console.log(results);


axios.post('https://cypress-html-report.herokuapp.com/post-json-result', {
    body: {
        results: results,
        projectId: "ecifmk83" // your project id
    }
})
    .then(res => {
        console.log(res.data.status);
    })
    .catch(error => {
        console.error(error);
    })
