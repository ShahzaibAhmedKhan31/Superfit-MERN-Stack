const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const WorkoutSchema = new Schema({
    name:{
        type: String,
        required:true,
        lowercase: true,
        unique:true
    },
    sets: {
        type:Number,
        required:true
    },
    reps: {
        type:Number,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    video_link: {
        type:String,
        required:true,
        unique: true
    },
    calories_burnt: {
        type:Number,
        required:true
    }
})

const Workouts = mongoose.model('workout', WorkoutSchema);
module.exports = Workouts;