const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const Workout_plan_Schema = new Schema({
    Plan_Name:{
        type: String,
        required:true,
        unique:true
    },
    Workout_Id: {
        type:String,
        required:true
    },
    User_Id: {
        type:String,
        required:true
    }
})

const Meal_plan = mongoose.model('workout_plan', Workout_plan_Schema);
module.exports = Meal_plan;