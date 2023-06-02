const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
const number = require('@hapi/joi/lib/types/number');

const Meal_plan_Schema = new Schema({
    Plan_type:{
        type: String,
        required:true
    },
    Meal_Breakfast: [{
        type: String,
        required:true
    }],
    Meal_Lunch: [{
        type: String,
        required:true
    }],
    Meal_Dinner: [{
        type: String,
        required:true
    }],
    Meal_Calories: {
        type: Number,
        required:true
    }
})

const Meal_plan = mongoose.model('Mealplan', Meal_plan_Schema);
module.exports = Meal_plan;