// var fs = require("fs");

// const curl = new (require( 'curl-request' ))();

// let file = fs.open('./allure-results/*-testsuite.xml');

// function open(file){
//     file.forEach(
//         curl.setHeaders(['Content-Type: multipart/form-data']).setBody(file).setUser("automation_testing@everfi":"Zl^6Tw6VtC1").post('http://jiraserver/rest/raven/1.0/import/execution/junit?projectKey=ALP').then(({statusCode, body, headers}) => {
//             console.log(statusCode, body, headers)
//         })
//     )
// }

// open(file);

// "client_id": "CE79476D01CC4D7F83EEDF95911E080B","client_secret": "ea513c98c0090399ffc4d3b28d91f9e669b2ec8aef445072efe51879c95e64ee"

// token=$(curl -H "Content-Type: application/json" -X POST --data '{"client_id": "CE79476D01CC4D7F83EEDF95911E080B","client_secret": "ea513c98c0090399ffc4d3b28d91f9e669b2ec8aef445072efe51879c95e64ee"}' https://xray.cloud.xpand-it.com/api/v1/authenticate| tr -d '"')
// curl -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer $token"  --data @"results/test-results.xml" https://xray.cloud.xpand-it.com/api/v1/import/execution/junit?projectKey=ALP&testPlanKey=ALP-302