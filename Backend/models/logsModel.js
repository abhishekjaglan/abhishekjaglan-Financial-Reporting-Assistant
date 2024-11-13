const mongoose = require('mongoose');

const logsSchema = mongoose.Schema({
    job_id: {
        type: String,
        required: [true , "Please add job_id"]
    },
    start_time: {
        type: String,
        required: true,
    },
    end_time: {
        type: String,
        required: true,
    },
    total_time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
},
{
    timestamps: true
});

module.exports = mongoose.model('Logs', logsSchema);