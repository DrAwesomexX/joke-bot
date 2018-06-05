const express = require('express');
const bp = require('body-parser');

const loadWeather = require('./weather/weather');
const loadMovie = require('./movie/movie.js');
const loadMovieGenre = require('./movie/movie-genre.js');
const config = require('./config.js');

const port = config.PORT;

var app = express();

app.use(bp.json());

loadWeather(app);
loadMovie(app);
loadMovieGenre(app);

app.post('/movie',movieInformation);
app.post('/movie-genre',movieGenreInformation)

app.post('/errors',(req,res)=>{
    console.log(req.body);

    res.sendStatus(200);
})

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})


