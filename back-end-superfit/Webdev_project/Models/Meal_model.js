const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const MealSchema = new Schema({
    name:{
        type: String,
        required:true,
        lowercase: true,
        unique:true
    },
    serving: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    calories: {
        type:Number,
        required:true
    },
    carbohydrates: {
        type:String,
        required:true
    },
    fiber: {
        type:String,
        required:true
    },
    sugars: {
        type:String,
        required:true
    },
    fat: {
        type:String,
        required:true
    },
    saturated: {
        type:String,
        required:true
    },
    poly_unsaturated: {
        type:String,
        required:true
    },
    mono_unsaturated: {
        type:String,
        required:true
    },
    cholestrol: {
        type:String,
        required:true
    },
    sodium: {
        type:String,
        required:true
    },
    potassium: {
        type:String,
        required:true
    },
    vitamin_A: {
        type:String,
        required:true
    },
    vitamin_C: {
        type:String,
        required:true
    },
    calcium: {
        type:String,
        required:true
    },
    iron: {
        type:String,
        required:true
    }
})

const Meals = mongoose.model('meal', MealSchema);
module.exports = Meals;