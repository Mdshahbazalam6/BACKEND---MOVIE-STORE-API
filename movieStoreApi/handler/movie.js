const product = require ('../database/movie')

async function getAllData ( req,res,next){
 let data = await product.find();

 res.send({data})
}

async function getDataById ( req,res,next){
    const { id } = req.params
    
    let data = await product.findById(id);
    res.send({data})
}

async function createMovieData ( req,res,next){
    const { Movie } = req.body
    console.log(Movie)

   let data = new product(Movie)

   await data.save()
    res.send({
        message:"Movie got Added",
        data})
}

async function searchMovies(req, res) {
    try {
        let { q } = req.query;
        let movies = await product.find({Title: {$regex: q}});
        res.status(200).send({
            data : movies
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).send(error);
    }
}

async function sortByYear(req, res) {
    try {
        let { sort } = req.query;
        sort === 'asc' ? sort = 1 :sort =-1
        let movies = await product.find().sort({Year : sort});
        res.status(200).send({
            data : movies
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).send(error);
    }
}

async function pagination(req, res) {
    try {
        let { page } = req.query;
        page = page*2
        let movies = await product.find().skip(page).limit(2);
        res.status(200).send({
            data : movies
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).send(error);
    }
}

module.exports = {
    getAllData,
    getDataById,
    createMovieData,
    searchMovies,
    sortByYear,
    pagination
}