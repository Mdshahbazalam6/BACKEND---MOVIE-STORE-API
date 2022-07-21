const mongoose = require ("mongoose")


const getMovideData = async()=>{
    let uri='mongodb://localhost:27017/movieDataBase'

    try {
        let res=await mongoose.connect(uri)
        console.log("DB Connection Successfull")
    } catch (error) {
        console.log("Error occurred in Connecting with Database", error.message)
        throw(error.message)
    }
}

module.exports=getMovideData