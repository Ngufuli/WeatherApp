if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;

//setting up the express server
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
//public html files
app.use(express.static('public'));

app.post('/weather', (req, res)=>{
    //api 
    const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto`
    //
    // console.log(req.body);  < - - - - - - debuggin purpose
    axios({
        url: url,
        responseType: 'json'
    }).then(data => res.json(data.data.currently))
})

const port = process.env.PORT || 4321;
app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`);
});