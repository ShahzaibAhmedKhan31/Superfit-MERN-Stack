const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const user_Data_Schema = new Schema({
    User_id: {
        type:String,
        required:true
    },
    User_response_num: [{
        type: Number,
        required:true
    }],
    User_response_str: [{
        type: String,
        required:true
    }],
    User_mealplan_id: {
        type: String,
        required: true
    }
})

const User_data = mongoose.model('user-response', user_Data_Schema);
module.exports = User_data;