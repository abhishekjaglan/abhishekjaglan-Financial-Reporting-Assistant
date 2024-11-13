// const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const logs = require('../models/logsModel');
require('dotenv').config();
// const prisma = new PrismaClient();

async function data_processing(file){
    const broken_file = file.split(',');
    console.log('Broken_file:::',broken_file);
    var final_object = {};

    for(var i = 0; i < broken_file.length ; i++){
        const key_pair = broken_file[i].split(';');
        const key_pair_1 = key_pair[0]; 
        console.log("Key pair 1", key_pair_1);
        const key_pair_2 = key_pair[1];

        final_object[key_pair_1] = key_pair_2;
    }

    console.log('Final object::', final_object);
    return final_object;
}

const getData = async (req,res) => {
    
    var insertion1, insertion2, insertion4, insertion3, insertion5;

    // fs.readFile('C:\\Users\\aj385009\\Documents\\node-app\\hack_body.log', 'utf-8', async (err,data) => {
    //     if(err){
    //         console.error(err);
    //         res.status(500).send(err);
    //     }else{
    //         console.log(data);
    //         const db_input = await data_processing(data);

    //         try {
    //             insertion1 = await logs.create({
    //                 job_id: db_input.Job_Name,
    //                 start_time: db_input.Start_Date,
    //                 end_time: db_input.End_Date,
    //                 total_time: db_input.Job_Duration,
    //                 status: db_input.Job_Status
    //             });
    //             console.log("Insertion1::", insertion1);
    //         } catch (error) {
    //             console.error("Error in Insertion1",error);
    //         }
    //     }        
    // });

    fs.readFile('C:\\Users\\aj385009\\Documents\\hack_body_2.log', 'utf-8', async (err,data) => {
        if(err){
            console.error(err);
            res.status(500).send(err);
        }else{
            console.log(data);
            const db_input = await data_processing(data);

            try {
                insertion2 = await logs.create({
                    job_id: db_input.Job_Name,
                    start_time: db_input.Start_Date,
                    end_time: db_input.End_Date,
                    total_time: db_input.Job_Duration,
                    status: db_input.Job_Status
                });
                console.log("Insertion2::", insertion2);
            } catch (error) {
                console.error("Error in Insertion2",error);
            }
        }        
    });

    // fs.readFile('C:\\Users\\aj385009\\Documents\\hack_body_3.log', 'utf-8', async (err,data) => {
    //     if(err){
    //         console.error(err);
    //         res.status(500).send(err);
    //     }else{
    //         console.log(data);
    //         const db_input = await data_processing(data);

    //         try {
    //             insertion3 = await logs.create({
    //                 job_id: db_input.Job_Name,
    //                 start_time: db_input.Start_Date,
    //                 end_time: db_input.End_Date,
    //                 total_time: db_input.Job_Duration,
    //                 status: db_input.Job_Status
    //             });
    //             console.log("Insertion3::", insertion3);
    //         } catch (error) {
    //             console.error("Error in Insertion3",error);
    //             res.status(500).send(error);
    //         }
    //     }        
    // });

    fs.readFile('C:\\Users\\aj385009\\Documents\\hack_body_4.log', 'utf-8', async (err,data) => {
        if(err){
            console.error(err);
            res.status(500).send(err);
        }else{
            console.log(data);
            const db_input = await data_processing(data);

            try {
                insertion4 = await logs.create({
                    job_id: db_input.Job_Name,
                    start_time: db_input.Start_Date,
                    end_time: db_input.End_Date,
                    total_time: db_input.Job_Duration,
                    status: db_input.Job_Status
                });
                console.log("Insertion4::", insertion4);
            } catch (error) {
                console.error("Error in Insertion4:",error);
                res.status(500).send(error);
            }
        }        
    });

    fs.readFile('C:\\Users\\aj385009\\Documents\\hack_body_5.log', 'utf-8', async (err,data) => {
        if(err){
            console.error(err);
            res.status(500).send(err);
        }else{
            console.log(data);
            const db_input = await data_processing(data);

            try {
                insertion5 = await logs.create({
                    job_id: db_input.Job_Name,
                    start_time: db_input.Start_Date,
                    end_time: db_input.End_Date,
                    total_time: db_input.Job_Duration,
                    status: db_input.Job_Status
                });
                console.log("Insertion5::", insertion5);
            } catch (error) {
                console.error("Error in Insertion5:",error);
                res.status(500).send(error);
            }
        }        
    });

    res.status(200).send({status:"Successfuly inserted!"});

};

const sendData = async(req,res) => {

    const {job_id} = req.query;
    console.log("Job_id:::", job_id);

    try {
        const allJobIdJobs = await logs.find({job_id: job_id}).sort({_id: -1});
        console.log(`All Jobs for ${job_id}:::`, allJobIdJobs);
        res.json(allJobIdJobs);
    } catch (error) {
        console.error(error);
        res.send("Failed retrieving the records");   
    }
};

const statusData = async(req,res) => {
    try {
        const allStatus = await logs.find({},'status');
        console.log("All status:::", allStatus);
        res.json(allStatus);
    } catch (error) {
        console.error(error);
        res.send("Failed retrieving the status records");
    }
};

const jobIdData = async(req,res) => {
    try {
        const allJobs = await logs.find({},'job_id');
        console.log("All status:::", allJobs);
        res.json(allJobs);
    } catch (error) {
        console.error(error);
        res.send("Failed retrieving the jobs records");
    }
};

const individualStatusData = async(req,res) => {

    const {job_id} = req.query;
    console.log("individualStatusJob_ID:::", job_id);

    try {
        const individualStatus = await logs.find({job_id: job_id},'status');
        console.log(`All status for ${job_id}:::`, individualStatus);
        res.json(individualStatus);
    } catch (error) {
        console.error(error);
        res.send("Failed retrieving the records");   
    }
};

module.exports = { sendData, getData, statusData, jobIdData, individualStatusData };