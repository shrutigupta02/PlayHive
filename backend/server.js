const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./db');
const Games = require('./model.js');

const app = express();

app.use(express.json());
app.use(cors());

connectToDB();


app.get('/projects', async(req, res)=>{
    try{
        let result = await Games.find();
        //console.log(result);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching projects, please try again later' });
    }
});

app.listen(1234, ()=>{
    console.log("App is listening on port 1234");
});