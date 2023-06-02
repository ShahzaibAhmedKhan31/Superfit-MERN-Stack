const JWT = require('jsonwebtoken')
const createError = require('http-errors')
const { token } = require('morgan')
const User = require('../Models/User_model')

module.exports = {
    signAccessToken:(userId) => {
        return new Promise((resolve,reject)=> {
            const payload = {
               
            }
            const secret = process.env.ACCESS_TOKEN_SECRET
            const options = {
                expiresIn: '1h',
                issuer: "www.Superfit.com",
                audience: userId
            }
           JWT.sign(payload,secret,options, (err,token)=>{
            if (err) {
                console.log(err.message)
                //reject(err)
                reject(createError.InternalServerError())
            }
            resolve(token)
           }) 
        }) 

        },
        verifyAccessToken: (req,res,next) =>{
            if (!req.headers['authorization']) return next(createError.Unauthorized())
            const authHeader = req.headers['authorization']
            const bearerToken = authHeader.split(' ')
            const token = bearerToken[1]
            JWT.verify(token, process.env.ACCESS_TOKEN_SECRET,async(err, payload) =>{
                if(err) {
                    return next(createError.Unauthorized())
                }
                let user = await User.findById(payload.aud);
                req.payload = user;
                next()
            })
        }
    }
