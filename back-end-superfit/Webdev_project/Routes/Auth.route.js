const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const User = require('../Models/User_model')
const Workout = require('../Models/Workout_model')
const Meal = require('../Models/Meal_model')
const MealPlan = require('../Models/Mealplan_model')
const WorkoutPlan = require('../Models/Workoutplan_model')
const Questionair = require('../Models/Question_model')
const User_data = require('../Models/Response_model')

const { authSchema } = require('../Helpers/validation_schema')
const { signAccessToken } = require('../Helpers/jwt_helpers')
const { result } = require('@hapi/joi/lib/base')
const { preferences } = require('@hapi/joi')


router.post('/register', async(req,res,next)=>{
    console.log(req.body)
    try{
        const result = await authSchema.validateAsync(req.body);
        const doesExist = await User.findOne({ email: result.email })
        if(doesExist) throw createError.Conflict(`${result.email} is already been registered`)

        const user = new User(result)
        const savedUser = await user.save()
        const accessToken = await signAccessToken(savedUser.id)

        res.send({accessToken})
        console.log("")
    }
    catch(error){
        if(error.isJoi == true) error.status = 422
        next(error)
    }
})

router.delete("/users/:id", async(req,res)=> {
    try {
        const id =req.params.id;
        const deleteUserResponse = await User.findByIdAndDelete(id);
        if(!id) {
            return res.status(400).send();
        }
        res.send(deleteUserResponse);
    }
    catch(e) {
        res.status(500).send(e);
    }
})

//Find all users
router.get('/users', async (req, res, next) => {
    User.find().then(result=>{
        res.status(200).json({
            Users:result
        });
    })
})

router.put('/register/:id', (req,res,next) =>{
    console.log(req.params.id);
    id = req.params.id;
    User.updateOne({_id:id}, {
        $set:{
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        }
    }).then (result => {
        res.status(200).json({
            updated_User:result
        })
    }).catch(error => {
            next(error);
            console.log(error);
        })
})

router.post('/login', async(req,res,next)=>{
    try {
        const result = await authSchema.validateAsync(req.body)
        const user = await User.findOne({email: result.email})

        if(!user) throw createError.NotFound("User not registered")

        const isMatch = await user.isValidPassword(result.password)
        if(!isMatch) throw createError.Unauthorized("Username/password not valid")

        const accessToken = await signAccessToken(user.id)
        res.send({accessToken})
    } catch (error) {
        if(error.isJoi === true) return next(createError.BadRequest("Invalid Username/Password"))
        next(error)
    }
})

router.post('/refresh-token', async(req,res,next)=>{
    res.send("refresh token route")
})
router.delete('/logout', async(req,res,next)=>{
    res.send("logout route")
})


//Adding Workouts to the workout table
router.post('/workouts', async(req,res,next)=>{
    console.log(req.body)
    try {
        const {name,sets,reps,description,video_link,calories_burnt} = req.body
        if(!name || !sets || !reps || !description || !video_link || !calories_burnt) throw createError.BadRequest()

        const doesExist = await Workout.findOne({name: name})
        if(doesExist) throw createError.Conflict(`${name} is already been added`);

        const workout = new Workout({name,sets,reps,description,video_link,calories_burnt});
        const savedWorkout = await workout.save()

        res.send(savedWorkout)


    } catch (error) {
        next(error)
    }
})

//Adding meals to the meal table
router.post('/meals', async(req,res,next)=>{
    console.log(req.body)
    try {
        const {name,serving,description,calories,carbohydrates,fiber,sugars,fat,saturated,poly_unsaturated,mono_unsaturated,cholestrol,sodium,potassium,vitamin_A,vitamin_C,calcium,iron} = req.body
        if(!name || !serving || !description || !calories || !carbohydrates || !fiber || !sugars || !fat || !saturated || !poly_unsaturated || !mono_unsaturated || !cholestrol || !sodium || !potassium || !vitamin_A || !vitamin_C || !calcium || !iron) throw createError.BadRequest()

        const doesExist = await Meal.findOne({name: name})
        if(doesExist) throw createError.Conflict(`${name} is already been added`);

        const meal = new Meal({name,serving,description,calories,carbohydrates,fiber,sugars,fat,saturated,poly_unsaturated,mono_unsaturated,cholestrol,sodium,potassium,vitamin_A,vitamin_C,calcium,iron});
        const savedMeal = await meal.save()

        res.send(savedMeal)


    } catch (error) {
        next(error)
    }
})

//getting meals from the meal table
router.get('/meals', async (req, res, next) => {
    	Meal.find().then(result=>{
            res.status(200).json({
                meals_data:result
            });
        })
})

//getting meals by its id from the meal table
router.get('/meals/:id', async (req, res, next) => {
    Meal.findById(req.params.id).then(result=>{
        res.status(200).json({
            meal_data_By_id:result
        });
    })
})

//getting workouts to the meal table
router.get('/workouts', async (req, res, next) => {
    Workout.find().then(result=>{
        res.status(200).json({
            workout_data:result
        });
    })
})

//getting workout by its id from the workouts table
router.get('/workouts/:id', async (req, res, next) => {
    Workout.findById(req.params.id).then(result=>{
        res.status(200).json({
            workout_data_By_id:result
        });
    })
})


//Adding meal plan to the User meal plan table
router.post('/mealplan', async(req,res,next)=>{
    console.log(req.body)
    try {
        const {Plan_type,Meal_Breakfast,Meal_Lunch,Meal_Dinner,Meal_Calories} = req.body
        if(!Plan_type || !Meal_Breakfast || !Meal_Lunch || !Meal_Dinner || !Meal_Calories) throw createError.BadRequest()

        const mealplan = new MealPlan({Plan_type,Meal_Breakfast,Meal_Lunch,Meal_Dinner,Meal_Calories});
        const savedMeal = await mealplan.save()

        res.send(savedMeal)


    } catch (error) {
        next(error)
    }
})



//Adding workout plan to the User workout plan table
router.post('/workoutplan', async(req,res,next)=>{
    console.log(req.body)
    try {
        const {Plan_Name,Workout_Id,User_Id} = req.body
        if(!Plan_Name || !Workout_Id || !User_Id) throw createError.BadRequest()

        const workoutplan = new WorkoutPlan({Plan_Name,Workout_Id,User_Id});
        const savedPlan = await workoutplan.save()

        res.send(savedPlan)


    } catch (error) {
        next(error)
    }
})

//getting mealsplan from the User mealplan table
router.get('/mealplan', async (req, res, next) => {
    MealPlan.find().then(result=>{
        res.status(200).json({
            mealsplan_data:result
        });
    })
})

//getting mealsplan by its id from the User mealplan table
router.get('/mealplan/:id', async (req, res, next) => {
    MealPlan.findById(req.params.id).then(result=>{
        res.status(200).json({
            mealplan_data_By_id:result
        });
    })
})

//deleting mealsplan by its id from the User mealplan table
router.delete("/mealplan/:id", async(req,res)=> {
    try {
        const id =req.params.id;
        const deleteMealPlan = await MealPlan.findByIdAndDelete(id);
        if(!id) {
            return res.status(400).send();
        }
        res.send(deleteMealPlan);
    }
    catch(e) {
        res.status(500).send(e);
    }
})

//getting workoutplan from the User workoutplan table
router.get('/workoutplan', async (req, res, next) => {
    WorkoutPlan.find().then(result=>{
        res.status(200).json({
            workoutplan_data:result
        });
    })
})

//getting workout by its id from the workouts table
router.get('/workoutplan/:id', async (req, res, next) => {
    WorkoutPlan.findById(req.params.id).then(result=>{
        res.status(200).json({
            workoutplan_data_By_id:result
        });
    })
})

router.post('/questions', async(req,res,next)=>{
    console.log(req.body)
    try {
        const {Question_type,Question_text,Question_status} = req.body
        if(!Question_type || !Question_text || !Question_status) throw createError.BadRequest()

        const doesExist = await Questionair.findOne({Question_text: Question_text})
        if(doesExist) throw createError.Conflict(`${Question_text} is already been added`);

        const Questionair_data = new Questionair({Question_type,Question_text,Question_status});
        const savedQuestionair = await Questionair_data.save()

        res.send(savedQuestionair)


    } catch (error) {
        next(error)
    }
})

//getting workoutplan from the User workoutplan table
router.get('/questions', async (req, res, next) => {
    Questionair.find().then(result=>{
        res.status(200).json({
            questions_data:result
        });
    })
})


router.post('/user-response', async(req,res,next)=>{
    console.log(req.body)
    try {
        const {User_id,User_response_num,User_response_str,User_mealplan_id} = req.body
        if(!User_id || !User_response_num || !User_response_str || !User_mealplan_id) throw createError.BadRequest()

        const Response_data = new User_data({User_id,User_response_num,User_response_str,User_mealplan_id});
        const savedResponse = await Response_data.save()

        res.send(savedResponse)


    } catch (error) {
        next(error)
    }
})

router.get('/user-response', async (req, res, next) => {
    User_data.find().then(result=>{
        res.status(200).json({
            User_response:result
        });
    })
})

router.delete("/user-response/:id", async(req,res)=> {
    try {
        const id =req.params.id;
        const deleteUserResponse = await User_data.findByIdAndDelete(id);
        if(!id) {
            return res.status(400).send();
        }
        res.send(deleteUserResponse);
    }
    catch(e) {
        res.status(500).send(e);
    }
})


router.get('/user-response/:id', function (req,res){
    id = req.params.id;
    User_data.find(({User_id:id}), function(err,val){
        res.send(val)
    })
})

router.put('/user-response/:id', (req,res,next) =>{
    console.log(req.params.id);
    id = req.params.id;
    User_data.updateOne({User_id:id}, {
        $set:{
            User_id : req.body.User_id,
            User_response_num : req.body.User_response_num,
            User_response_str : req.body.User_response_str,
            User_mealplan_id : req.body.User_mealplan_id
        }
    }).then (result => {
        res.status(200).json({
            updated_UserResponse:result
        })
    }).catch(error => {
            next(error);
            console.log(error);
        })
})

router.get('/mealplan', async (req, res, next) => {
    MealPlan.find().then(result=>{
        res.status(200).json({
            User_response:result
        });
    })
})

router.get('/mealplan/:id', function (req,res){
    id = req.params.id;
    MealPlan.find(({_id:id}), function(err,val){
        res.send(val)
    })
})

router.get('/mealplan/:cal/:pref', function (req,res){
    cal = req.params.cal;
    pref = req.params.pref;
    MealPlan.find(({Meal_Calories:cal, Plan_type:pref}), function(err,val){
        res.send(val)
    })
})

module.exports= router