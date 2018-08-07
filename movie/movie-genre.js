const movieDB = require('../movieDB.json');
const _  =require('lodash');

// allName=(genre)=>{
//     var name = [];
//     console.log(genre);
//     movieDB.forEach(element => {
//         if(element.genre.toLowerCase() === genre.toLowerCase()){
//           name.push(element.title);

        


//         }
//     });

//     return name

// }

//var name = []

allUrl = (genre)=>{

    var gen = [];
    console.log(genre);
    movieDB.forEach(element => {
        if(element.genre.toLowerCase() === genre.toLowerCase()){
          gen.push(element);
        //  name.push(element.title)

        


        }
    });

    return gen;
}

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
        const db = _.sampleSize(allUrl(genre.value),18);
       // const mname = _.sampleSize(allName(genre.value),10);
       
        console.log(db);
        console.log(genre.value);
        // console.log(genre);
        // console.log(genreInfo);
      
        //console.log(mname);

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
                        type: 'list',
                        content: {
                        
                          elements: [
                            {
                              title:`${db[0].title}`,
                              imageUrl:`${db[0].posterurl}`,
                              subtitle:`imdb rating: ${db[0].imdbRating}` ,
                              buttons: [
                                {
                                  title: `${db[0].year}`,
                                  type: 'postback',
                                  value: 'BUTTON_1_VALUE'
                                }
                              ],
                            },
                            {
                                title:`${db[1].title}`,
                                imageUrl:`${db[1].posterurl}`,
                                subtitle:`${db[1].imdbRating}` ,
                                buttons: [
                                  {
                                    title: `${db[1].year}`,
                                    type: 'postback',
                                    value: 'BUTTON_2_VALUE'
                                  }
                                ],
                                
                                
                              },
                              {
                                title:`${db[2].title}`,
                              imageUrl:`${db[2].posterurl}`,
                                subtitle:`${db[2].imdbRating}` ,
                                buttons: [
                                  {
                                    title: `${db[2].year}`,
                                    type: 'postback',
                                    value: 'BUTTON_3_VALUE'
                                  }
                                ]
                              },
                              {
                                title:`${db[3].title}`,
                              imageUrl:`${db[3].posterurl}`,
                                subtitle:`${db[3].imdbRating}` ,
                                buttons: [
                                  {
                                    title: `${db[3].year}`,
                                    type: 'postback',
                                    value: 'BUTTON_4_VALUE'
                                  }
                                  
                                ]
                              },

                            
                           
                            ],
                             
                           
                              
                         
                       
                         
                        }
                      },
                      {
                        type: 'list',
                        content: {
                        
                          elements: [
                            {
                              title:`${db[4].title}`,
                              imageUrl:`${db[4].posterurl}`,
                              subtitle:`${db[4].imdbRating}` ,
                              buttons: [
                                {
                                  title: `${db[4].year}`,
                                  type: 'postback',
                                  value: 'BUTTON_5_VALUE'
                                }
                              ],
                            },
                            {
                                title:`${db[5].title}`,
                                imageUrl:`${db[5].posterurl}`,
                                subtitle:`${db[5].imdbRating}` ,
                                buttons: [
                                  {
                                    title: `${db[5].year}`,
                                    type: 'postback',
                                    value: 'BUTTON_6_VALUE'
                                  }
                                ],
                                
                              },
                              {
                                title:`${db[6].title}`,
                              imageUrl:`${db[6].posterurl}`,
                                subtitle:`${db[6].imdbRating}` ,
                                buttons: [
                                  {
                                    title: `${db[6].year}`,
                                    type: 'postback',
                                    value: 'BUTTON_6_VALUE'
                                  }
                                ]
                              },
                              {
                                title:`${db[7].title}`,
                              imageUrl:`${db[7].posterurl}`,
                                subtitle:`${db[7].imdbRating}` ,
                                buttons: [
                                  {
                                    title: `${db[7].year}`,
                                    type: 'postback',
                                    value: 'BUTTON_7_VALUE'
                                  }
                                  
                                ]
                              },

                            
                           
                            ],
                             
                           
                              
                         
                       
                         
                        }
                      }





                ]
            })
        }
        console.log(genreInfo.genre)
    }

    // whatGenre = (id)=>{

       
     
        
    //         if(id==='Action'){
    //             return  `these are some best action movies`

    //         }
    



    //     else if(id==='Crime'){
    //         return `these are some best crime movies`
    //     }

    //     else if(id==='comedy'){
    //         return `these are some besr comedy movies`

    //     }
    //     else if(id==="Sci-fi"){
    //         return 'these are some best sci-fi movies'
    //     }

    


    // }


}


module.exports = loadMovieGenre;