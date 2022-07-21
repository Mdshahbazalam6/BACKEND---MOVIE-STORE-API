const mongoose = require ("mongoose")

const MovieSchema = new mongoose.Schema({
    Poster:{
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true 
    },
    Type:{
        type:String,
        required:true 
    },
    Year:{
        type:String,
        required:true
    }

})

const movie = mongoose.model("movies",MovieSchema)

module.exports=movie
