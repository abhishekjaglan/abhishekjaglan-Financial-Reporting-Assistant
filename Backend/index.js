const express = require('express');
require('dotenv').config();
const dataRoutes = require('./route/dataRoute');
const cors = require('cors');
const fs = require('fs');
const setUpCronJob = require('./cronjob');
const connectDb = require('./config/connectDB');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
connectDb();
 
setUpCronJob();
app.use('/api', dataRoutes);

app.listen(PORT, '0.0.0.0', (error) => {
    if(error){
        console.erro(`Failed to start server: ${error}`);
        process.exit(1);
    }
    console.log(`Backend running on port ${PORT}`);
});