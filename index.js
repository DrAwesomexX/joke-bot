const express = require('express');
const bp = require('body-parser');

const loadWeather = require('./weather/weather');
const loadMovie = require('./movie/movie.js');
const movieDB = require('./movieDB.json');
const config = require('./config.js');

const port = config.PORT;

var app = express();

app.use(bp.json());

loadWeather(app);

app.post('/movie',movieInformation);

app.post('/errors',(req,res)=>{
    console.log(req.body);

    res.sendStatus(200);
})
function findMovieByName(title){
  
    const find= movieDB.find(p => p.title.toLowerCase() === title.toLowerCase());


    if(!find){
        return null
    }

    return find;
}


function movieInformation(req,res){

    const movie = req.body.conversation.memory.movie;
    const movieInfo = findMovieByName(movie.value);
  
    if(!movieInfo){
        res.json({
            replies:[
                {
                    type:'text',
                    content:'unable to fetch information about movie' 
                }


            ]
        });
        
        
    }
    
    
    else{
         return res.json({
            replies:[{
                type:'text',
                content:movieInfo.year
            },{
                type:'text',
                content:movieInfo.storyline
            },{
                type:'text',
                content:movieInfo.posterurl
            }],
        });
        
    }

    
}

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})


