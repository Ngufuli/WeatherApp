if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;

//setting up the express server
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/weather', (req, res)=>{

})

const port = process.env.PORT || 4321;
app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`);
});