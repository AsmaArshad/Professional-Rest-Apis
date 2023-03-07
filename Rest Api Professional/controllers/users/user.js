const db = require('../config/db/db.js');
const bcrypt = require('bcrypt');
//const { validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');


//Register User
exports.register = async (req, res) => {
    /*const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({
            message: errors.array()
        })
    }*/
    var {Name, Email, Password, ConfirmPassword} = req.body;
    if(Password != ConfirmPassword){
        res.json({
            message: "Password Not Matched!"
        })
    }
    else{
        await db.select().from('users').where({Email}).then((user_res) => {
            if(user_res.length>=1){
                res.json({
                    message: "Email Already Exists!"
                })
                return;
            }
        }).catch(err=> {
            res.json({
                message: "Something went wrong!",
                error:err
            })
        }) 
                 
        //use bcrypt here for hashing the password
        //saltRound here 10 means that it generate a random string.
        //and added it to our hash key
                             
        bcrypt.hash(Password, 10, async(err, hashPassword)=>{
            if(err){
                return res.json({
                    message: "Something went wrong.Try Again!",
                    error:err
                })
            }
            else{         
                await db('users').insert({ Name, Email, Password: hashPassword}).then((user_res) => {
                    res.status(201).json({
                        message_type:"success",
                        message: "User Registered Successfully!",                
                    })
                })
                .catch((err)=> {
                    res.json(err.message);
                })
            }
        })
    } 
}



/************************ Login *********************/
exports.login = async(req, res) => {  
    /*const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.send({
            message_type:'error',
            message: errors.array()
        })
    }*/

    var { Email, Password } = req.body;
    await db.select().from('users').where({Email}).then((user_res) => {
        if(user_res.length<1){
            res.status(404).json({
                message: "User does not exists"
            })
        }
        else{
            bcrypt.compare( Password, user_res[0].Password, (err, result)=>{
                if(err){
                    res.status(404).json({
                        message:"Auth Failed"
                    })
                }
                if(result){
                    //jwt sign function use here to generate token
                    var token = jwt.sign(
                        {
                          //payload means custom information pass here for authentication
                          Id: user_res[0].Id,
                          Email:user_res[0].Email,                     
                        },
                        'secret',  //secret key is unique i.e. secret here
                        { expiresIn: "1h"}
                        );
                    res.status(200).json({
                        message: 'User Found!',
                        token: token
                    })
                }
                else{
                    res.status(404).json({
                        message:"Auth Failed"
                    })
                }
            })
        }
    }).catch((err)=> {
        res.json({
            error: err
        })
    })
}