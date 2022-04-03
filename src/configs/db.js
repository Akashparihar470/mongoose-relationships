
const mongoose = require('mongoose')

const connect = ()=>{

    return mongoose.connect('mongodb+srv://evaluation:boom@cluster0.sxpvr.mongodb.net/evaluation?retryWrites=true&w=majority')

}

module.exports = connect