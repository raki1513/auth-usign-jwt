const express = require('express')
const dotenv = require("dotenv")
const jwt = require('jsonwebtoken')
const app = express();
const bycrpt = require('bcrypt')
const middleware = require('./middleware');
const Singup = require('./models/Singup')
const cors = require('cors')
dotenv.config();
app.use(cors({origin:'*'}))
const Dbconnection = require('./databaseconnection');
Dbconnection();
app.use(express.json());
//  Creating a new User 
app.post ('/SignUp',async(req,res)=>{
    try{
        const {username,email, password, confirmPassword, dateOfBirth,gender } = req.body;
        const exist = await Singup.findOne({email});
        const usernameExist = await Singup.findOne({username})
        if(usernameExist) {
            return res.status(400).send("Username is already taken")
        }
        if(exist) {
            return res.status(400).send("User with Email Already Exist ")
        }
        if(password!==confirmPassword){
            return res.status(400).send("Password Must be same")
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        let newUser = new Singup({
            username,email,password:hashedPassword,confirmPassword,dateOfBirth,gender
        })
        await newUser.save();
        return res.status(200).send("User Registered Successfully")
    }
    catch(err){
        console.log(err)
        res.status(500) 
    }
})

// Login Route 
app.post ('/Login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const exist = await Singup.findOne({username});
        const hashpass = await bycrpt.compare(password, exist.password)
        if(!exist) {
            return res.status(400).send("User with Username Doesnt Exist ")
        }
        if(!hashpass){
            return res.status(400).alert("Enter Valid Email/Password")
        }
        let payload = {
            user:{
            id: exist.id
            }
        }
        jwt.sign(payload,'jwtsecret', { expiresIn: '1h' },
            (err,token) =>{
            if (err) throw err; 
            return res.json({token})
        })
    }
         catch (err) {
        res.status(500).json({ message: 'Error logging in' });
      }
    });
        // Getting User data
        app.get('/Profile',middleware,async(req,res)=>{
            try{
                let exist = await Singup.findById(req.user.id);
                if(!exist){
                    return res.status(400).send("User Not found")
                }
                res.json(exist);
            }
            catch(err){
                console.log(err)
                return res.status(500).send("Server side error ");
                
            }
        })
        
      
app.listen('8000',()=>{
    console.log("Server Connected Successfullly")
})