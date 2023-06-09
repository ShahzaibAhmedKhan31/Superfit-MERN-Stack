const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
const { process_params } = require('express/lib/router')
const res = require('express/lib/response')
require('dotenv').config()
require('./Helpers/init_mongodb')
const { verifyAccessToken } = require('./Helpers/jwt_helpers')
const User = require('./Models//User_model')
const cors = require("cors")

const AuthRoute = require('./Routes/Auth.route')

const app = express()
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', verifyAccessToken, async (req, res, next) => {
    res.send(req.payload)
})

app.use('/auth', AuthRoute)

app.use(async (req,res,next)=>{
    next(createError.NotFound('This route does not exist'))
})

app.use((err,req,res,next) =>{
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})


const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

