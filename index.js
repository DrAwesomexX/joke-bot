const express = require('express');
const request = require('request');
const bp = require('body-parser');

const loadWeather = require('./weather/weather');
const loadMovie = require('./movie/movie.js');
const loadMovieGenre = require('./movie/movie-genre.js');
const loadMovieUpcomingGenre = require('./movie/movie-upcoming.js');
const loadMovieFranchise = require('./movie/particular.js')
const loadMovieStory = require('./movie/movie-story.js');
const loadJokesByCategory = require('./jokes/categoryJokes.js');
//const loadSelf = require('./self/self.js');
const config = require('./config.js');


const port = config.PORT;

var app = express();

app.use(bp.json());

loadWeather(app);
loadMovie(app);
loadMovieGenre(app);
loadMovieUpcomingGenre(app);
loadMovieFranchise(app);
loadMovieStory(app);
loadJokesByCategory(app);
//loadSelf(app);


app.post('/movie',movieInformation);
app.post('/movie-genre',movieGenreInformation)
app.post('/movie-upcoming-genre',movieUpGenre)
app.post('/movie-franchise',movieFranchise)
app.post('/movie-story',movieCompleteStory);
app.post('/jokes-category',jokesByCategory);
//app.post('/bot-self',botSelf)

app.post('/errors',(req,res)=>{
    console.log(req.body);

    res.sendStatus(200);
})



app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})

