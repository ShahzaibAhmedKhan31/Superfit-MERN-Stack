const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const Questionair_Schema = new Schema({
    Question_type:{
        type: String,
        required:true,
        unique:false
    },
    8: {
        type:String,
        required:true
    },
    Question_status: {
        type:Boolean,
        required:true
    }
})

const Questions = mongoose.model('questions', Questionair_Schema);
module.exports = Questions;