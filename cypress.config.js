const { defineConfig } = require("cypress");
const axios = require('axios');
const request = require('request');



module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // console.log('??????????????????????????????????????????????');
      // axios
      //     .get('http://127.0.0.1:8000/testapi')
      //     .then(res => {
      //       console.log('----------------------------------------');
      //       console.log(res.data);
      //       console.log('----------------------------------------');
      //     })
      //     .catch(error => {
      //       console.error(error);
      //     });
      // console.log('8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888');
      // on('after:spec', (spec, results) => {

      //   // create a new file named "cypress/integration/results.json"
      //   // and write the results to it
      //   // const fs = require('fs');
      //   // const path = require('path');
      //   // fs.writeFileSync('./results.json', JSON.stringify(results, null, 2));

      //   /* ... */
      //   console.log('999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999');
      //   // console.log(results);
      //   // console.log('333333333333333333333333333333333333333333333333333333333333333333333');
      //   // console.log(spec);

      //   // const tests = results.tests;
      //   // for (let i = 0; i < tests.length; i++) {
      //   //   const title = tests[i].title;
      //   //   console.log(title);
      //   //   }
      // })

      // on('after:run', (results) => {
      //   /* ... */
      //   console.log('2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222');
      //   // console.log(results);
      //   // let fileName = results['endedTestsAt'] + '.json';
      //   // // replace : with - in the filename
      //   // fileName = fileName.replace(/:/g, '-');
      //   // // replace . with - in the filename
      //   // fileName = fileName.replace(/\./g, '-');
      //   // const fs = require('fs');
      //   // const path = require('path');
      //   // fs.writeFileSync('./' + fileName, JSON.stringify(results, null, 2));


      //      axios.post('http://127.0.0.1:8000/testapi', {
      //       body: results
      //      })
      //      .then(res => {
      //       console.log('----------------------------------------');
      //       console.log(res.data.status);
      //       console.log('----------------------------------------');
      //     })
      //     .catch(error => {
      //       console.error(error);
      //     });

      //   //   function makeGetRequest(path) {
      //   //     return new Promise(function (resolve, reject) {
      //   //         axios.get(path).then(
      //   //             (response) => {
      //   //                 var result = response.data;
      //   //                 console.log('Processing Request');
      //   //                 resolve(result);
      //   //             },
      //   //                 (error) => {
      //   //                 reject(error);
      //   //             }
      //   //         );
      //   //     });
      //   // }

      //   // async function main() {
      //   //     var result = await makeGetRequest('http://127.0.0.1:8000/testapi');
      //   //     console.log(result);
      //   //     console.log('Statement 2');
      //   // }
      //   // main();

      // })



      on('after:run', (results) => {
        if (9 === 1) {
          axios.post('http://127.0.0.1:8000/post-json-result', {
            body: {
              results: results,
              projectId: "1vfphii1" // your project id
            }
          })
            .then(res => {
              console.log(res.data.status);
            })
            .catch(error => {
              console.error(error);
            })
        }

        const fs = require('fs');
        fs.writeFileSync('./results.json', JSON.stringify(results, null, 2));

        var execSync = require('child_process').execSync;
        var cmd = "node send.js";

        var options = {
          encoding: 'utf8'
        };

        console.log(execSync(cmd, options))
      })


    },
  },
});
