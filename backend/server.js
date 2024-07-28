const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./db');
const Games = require('./gameModel.js');
const User = require('./userModel.js');

const app = express();

app.use(express.json());
app.use(cors());

connectToDB();


app.get('/games', async(req, res)=>{
    try{
        let result = await Games.find();
        //console.log(result);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching projects, please try again later' });
    }
});

app.post('/user', async(req, res) => {
    const { firstName, lastName, email, password, countryCode, phoneNumber } = req.body;
    
    const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        countryCode: countryCode.value,
        phoneNumber
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error saving user', error);
        res.status(500).json({ message: 'Error saving user' });
    }
});

app.listen(1234, ()=>{
    console.log("App is listening on port 1234");
});