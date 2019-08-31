if(process.env.NODE_ENV !== 'production'){
    require('dotenv').cofig()
}

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY