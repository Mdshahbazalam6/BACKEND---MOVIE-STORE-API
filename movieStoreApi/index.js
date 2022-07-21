const express =require('express')
const getMovideData = require('./Database')
const cors = require("cors")
const expressRouter = require('./router/movie')

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger)
app.use(expressRouter)




function logger (res,req,next){
  console.log("Applied logger Middleware")
    next()
}




getMovideData().then(()=>{
   app.listen(3002,()=>{
    console.log("Server is running at 3002")
   })
})


// movieStoreApi