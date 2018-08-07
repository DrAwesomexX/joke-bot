const movieUpDB = require('../movieUpcomingDB.json');
const _ = require('lodash');


upUrls = (genre)=>{

    var dataUrls = []

    movieUpDB.forEach(eleUp => {
        
       if(eleUp.genre.toLowerCase()===genre.toLowerCase()){

        dataUrls.push(eleUp);
       }
        
    });
    return dataUrls;
}


findUpGenre=(genre)=>{
   
    const findUp = movieUpDB.find(p=>p.genre.toLowerCase()==genre.toLowerCase());

    if(!findUp){
        return null;
    }
    
    return findUp
}

loadMovieUpcomingGenre = (app)=>{

    movieUpGenre = (req,res)=>{

        const genre = req.body.conversation.memory.genre;
        const genreInfo = findUpGenre(genre.value);
        const movieU = upUrls(genre.value);

           
        if(!genreInfo){

            res.json({
                replies:[{
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
                              title:`${movieU[0].title}`,
                              imageUrl:`${movieU[0].posterurl}`,
                              subtitle:`${movieU[0].releaseDate}` ,
                              buttons: [
                                {
                                  title: `${movieU[0].year}`,
                                  type: 'postback',
                                  value: 'BUTTON_1_VALUE'
                                }
                              ],
                            },
                            {
                                title:`${movieU[1].title}`,
                                imageUrl:`${movieU[1].posterurl}`,
                                subtitle:`${movieU[1].releaseDate}` ,
                                buttons: [
                                  {
                                    title: `${movieU[1].year}`,
                                    type: 'postback',
                                    value: 'BUTTON_2_VALUE'
                                  }
                                ],
                                
                                
                              },
                              {
                                title:`${movieU[2].title}`,
                              imageUrl:`${movieU[2].posterurl}`,
                                subtitle:`${movieU[2].releaseDate}` ,
                                buttons: [
                                  {
                                    title: `${movieU[2].year}`,
                                    type: 'postback',
                                    value: 'BUTTON_3_VALUE'
                                  }
                                ]
                              },
                              {
                                title:`${movieU[3].title}`,
                              imageUrl:`${movieU[3].posterurl}`,
                                subtitle:`${movieU[3].releaseDate}` ,
                                buttons: [
                                  {
                                    title: `${movieU[3].year}`,
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
                              title:`${movieU[4].title}`,
                              imageUrl:`${movieU[4].posterurl}`,
                              subtitle:`${movieU[4].releaseDate}` ,
                              buttons: [
                                {
                                  title: `${movieU[4].year}`,
                                  type: 'postback',
                                  value: 'BUTTON_1_VALUE'
                                }
                              ],
                            },
                            {
                                title:`${movieU[5].title}`,
                                imageUrl:`${movieU[5].posterurl}`,
                                subtitle:`${movieU[5].releaseDate}` ,
                                buttons: [
                                  {
                                    title: `${movieU[5].year}`,
                                    type: 'postback',
                                    value: 'BUTTON_2_VALUE'
                                  }
                                ],
                                
                                
                              },
                              {
                                title:`${movieU[6].title}`,
                              imageUrl:`${movieU[6].posterurl}`,
                                subtitle:`${movieU[6].releaseDate}` ,
                                buttons: [
                                  {
                                    title: `${movieU[6].year}`,
                                    type: 'postback',
                                    value: 'BUTTON_3_VALUE'
                                  }
                                ]
                              },
                              {
                                title:`${movieU[7].title}`,
                              imageUrl:`${movieU[7].posterurl}`,
                                subtitle:`${movieU[7].releaseDate}` ,
                                buttons: [
                                  {
                                    title: `${movieU[7].year}`,
                                    type: 'postback',
                                    value: 'BUTTON_4_VALUE'
                                  }
                                  
                                ]
                              },

                            
                           
                            ],
                             
                           
                              
                         
                       
                         
                        }
                      }
                ]
            })
        }
    }
}

module.exports = loadMovieUpcomingGenre;