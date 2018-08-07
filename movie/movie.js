

const movieDB = require('../movieDB.json');






findMovieByName = (title)=>{

    
   const find= movieDB.find(p => p.title.toLowerCase() === title.toLowerCase());

   if(!find){
       return null;
   }
   
   return find;
};

loadMovie = (app)=>{

    movieInformation = (req,res)=>{

        const movie = req.body.conversation.memory.movie;
        const movieInfos = findMovieByName(movie.value);

        if(!movieInfos){

            res.json({
                replies:[
                    {
                        type:'text',
                        content:'soory I couldnt find any movie'
                    }
                ]
            })
        }

        else{
            res.json({
                replies:[
                    {
                        type: 'card',
                        content: {
                          title: movieInfos.title,
                          subtitle: `hola`,
                          imageUrl: movieInfos.posterurl,
                          buttons: [
                            {
                              title: `${movieInfos.title}` ,
                              type: 'postback',
                              value: movieInfos.storyline,
                            
                            },
                            
                            
                          ],
                          
                        }
                      }
                    
                ]
                
            })
            console.log(movieInfos.posterurl);
           
        }
       
    }
    

    

    findingRating = (rate)=>{
          
       

        if(rate>=9){
          return  `${rate}: The movie is too good a must watch in a lifetime `
        }
        else if(rate>=8 && rate<=9){
           return `${rate}: Give it a shot you won't feel regret  `
        }
        else if(rate>=7 && rate<=8){
            return `${rate}: Ahhh you can watch it if you feel bore `
        }
        else if(rate>=6 && rate<=7){
          return  `${rate}: obviously there are lot of good movie available you can skip this `
        }

        else if(rate>=5 && rate<=6){
           return   `${rate}: One of the worst movies `
        }
    }
}
module.exports = loadMovie;