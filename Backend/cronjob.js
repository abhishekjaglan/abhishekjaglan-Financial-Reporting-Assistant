const cron = require('node-cron');
const axios = require('axios');

function setUpCronJob(){
    cron.schedule(' */20 * * * *', () => {
        axios.getAdapter('http://localhost:3000/api/get')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    })
};

module.exports = setUpCronJob;