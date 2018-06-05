const movieDB = require('../movieDB.json');


movieByGenre = (genre)=>{

    const gen = movieDB.find(p => p.genre.toLowerCase() === genre.toLowerCase());
    if(!gen){
        return null
    }

    return gen;
}

loadMovieGenre = (app)=>{

    
    movieGenreInformation = (req,res) =>{
       
        const genre = req.body.conversation.memory.genre;
        const genreInfo = movieByGenre(genre.value);
        console.log(genre.value);
        console.log(genre);
        console.log(genreInfo);
      

        if(!genreInfo){

            res.json({
                replies:[
                    {
                        type:'text',
                        content:'genre not exist'
                    }
                ]
            })
        }

        else{
            res.json({
                replies:[
                    {
                        type:'text',
                        content:`${whatGenre(genreInfo.genre)}  ${genreInfo.title}`
                    },

                    {
                        type:'picture',
                        content:`${genreInfo.posterurl}`
                    }

                    
                ]
            })
        }
        console.log(genreInfo.genre)
    }

    whatGenre = (id)=>{

        if(id==='Action'){
            return  `these are some best action movies`
           
        }
        

        else if(id==='Crime'){
            return `these are some best crime movies` 
        }

        else if(id==='comedy'){
            return `these are some besr comedy movies`

        }

    
    }

}
module.exports = loadMovieGenre;