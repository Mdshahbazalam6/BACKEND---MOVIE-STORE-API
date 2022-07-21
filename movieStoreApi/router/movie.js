const express = require ("express")
const { getAllData,getDataById,createMovieData,searchMovies,sortByYear,pagination } =require ("../handler/movie")

const expressRouter = express.Router();


expressRouter.get('/AllMovies',getAllData)
expressRouter.post('/AllMovies',createMovieData)
expressRouter.get('/AllMovies/sort',sortByYear)
expressRouter.get('/AllMovies/page',pagination)
expressRouter.get('/SearchMovies',searchMovies)
expressRouter.get('/Movies/:id',getDataById)


module.exports=expressRouter;