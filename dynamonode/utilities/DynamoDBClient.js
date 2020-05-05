'use strict';
const AWS = require('aws-sdk');
// update the region
AWS.config.update({ region: 'Asia Pacific' });
// update the credentials
AWS.config.update({
    accessKeyId: '130997',
    secretAccessKey: '13091997',
});
let dynamoDBClient = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
});
var docClient = new AWS.DynamoDB.DocumentClient();
// export for further use



module.exports = dynamoDBClient;
