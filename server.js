//import dependencies

const express = require('express')
const cors = require('cors')


//imprt JSON files

const project = require('./projects.json')
const about = require('./about.json')


//create app object
const app = express();

//setup middleware
app.use(cors());

//home route(test)
app.get('/', (req,res)=>{
    res.send("Ello World");
});


//route to test app
app.get('/projects', (req,res)=>{
    res.json(about);
});
