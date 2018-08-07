const particularDB = require('../particularMovieDB.json');




// franchiseUrls = (franchise)=>{

//     var newData =[];
//     console.log(newData);

//     particularDB.forEach(element => {
         
//         if(element.franchise.toLowerCase()==franchise.toLowerCase()){

//             newData.push(element.pictureUrl)
//         }

           
   
//     });

//     return newData;
// }
franchiseByName = (franchise)=>{
    
    const data = particularDB.find(p=>p.franchise.toLowerCase()==franchise.toLowerCase());

    if(!data){
        return null
    }

    return data
}

loadMovieFranchise = (app)=>{

    movieFranchise = (req,res)=>{

        const franchise = req.body.conversation.memory.franchise;
        const franchiseInfo = franchiseByName(franchise.value);
        // const collection = franchiseUrls(franchise.value);
        // console.log(collection);
        
        if(franchiseInfo.pictureUrl[5]==null && franchiseInfo.pictureUrl[4]){

            res.json({
                replies:[
                    {
                        type:'carousel',
                        content:[
                            {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[0]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[1]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[2]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[3]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[4]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },

                        ]
                    }
                ]
            })
        }

        else if(franchiseInfo.pictureUrl[3]==null && franchiseInfo.pictureUrl[2]){
                res.json({
                    replies:[
                        {
                            type:'carousel',
                            content:[
                                {
                                    title: `${franchiseInfo.names[0]}, (${franchiseInfo.year[0]}) IMDB: ${franchiseInfo.imdbRating[0]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[0]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[0])}`,
                                    imageUrl: `${franchiseInfo.pictureUrl[0]}`,
                                    buttons: [
                                      {
                                        title: `Story of ${franchiseInfo.names[0]}`,
                                        type: 'postback',
                                        value: `Story of ${franchiseInfo.names[0]}`
                                      }
                                    ]
                                  },
                                  {
                                    title: `${franchiseInfo.names[1]}, (${franchiseInfo.year[1]}) IMDB: ${franchiseInfo.imdbRating[1]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[1]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[1])}`,
                                    imageUrl: `${franchiseInfo.pictureUrl[1]}`,
                                    buttons: [
                                      {
                                        title: `Story of ${franchiseInfo.names[1]}`,
                                        type: 'postback',
                                        value: `Story of ${franchiseInfo.names[1]}`
                                      }
                                    ]
                                  },
                                  {
                                    title: `${franchiseInfo.names[2]}, (${franchiseInfo.year[2]}) IMDB: ${franchiseInfo.imdbRating[2]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[2]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[2])}`,
                                    imageUrl: `${franchiseInfo.pictureUrl[2]}`,
                                    buttons: [
                                      {
                                        title: `Story of ${franchiseInfo.names[2]}`,
                                        type: 'postback',
                                        value: `Story of ${franchiseInfo.names[2]}`
                                      }
                                    ]
                                  },
                            ]
                        }
                    ]
                })
        }

        else if(franchiseInfo.pictureUrl[4]==null && franchiseInfo.pictureUrl[3]){
            res.json({
                replies:[
                    {
                        type:'carousel',
                        content:[
                            {
                                title: `${franchiseInfo.names[0]}, (${franchiseInfo.year[0]}).............................IMDB: ${franchiseInfo.imdbRating[0]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[0]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[0])}`,
                                imageUrl: `${franchiseInfo.pictureUrl[0]}`,
                                subtitle:'jfjj',
                                buttons: [
                                  {
                                    title: 'story ',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[1]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[2]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[3]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                            
                        ]
                    }
                ]
            })
    }
                  
    else if(franchiseInfo.pictureUrl[2]==null && franchiseInfo.pictureUrl[1]){
        res.json({
            replies:[
                {
                    type:'carousel',
                    content:[
                        {
                            title: 'CARD_1_TITLE',
                            imageUrl: `${franchiseInfo.pictureUrl[0]}`,
                            buttons: [
                              {
                                title: 'BUTTON_1_TITLE',
                                type: 'postback',
                                value: 'BUTTON_1_VALUE'
                              }
                            ]
                          },
                          {
                            title: 'CARD_1_TITLE',
                            imageUrl: `${franchiseInfo.pictureUrl[1]}`,
                            buttons: [
                              {
                                title: 'BUTTON_1_TITLE',
                                type: 'postback',
                                value: 'BUTTON_1_VALUE'
                              }
                            ]
                          },
                       
                        
                    ]
                }
            ]
        })
}


        else if(franchiseInfo.pictureUrl[8]==null && franchiseInfo.pictureUrl[7]){
            res.json({
                replies:[
                    {
                        type:'carousel',
                        content:[
                            {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[0]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[1]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[2]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },

                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[3]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[4]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[5]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[6]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                              {
                                title: 'CARD_1_TITLE',
                                imageUrl: `${franchiseInfo.pictureUrl[7]}`,
                                buttons: [
                                  {
                                    title: 'BUTTON_1_TITLE',
                                    type: 'postback',
                                    value: 'BUTTON_1_VALUE'
                                  }
                                ]
                              },
                        ]
                    }
                ]
            })
    }
    else if(franchiseInfo.pictureUrl[9]==null && franchiseInfo.pictureUrl[8]){
        res.json({
            replies:[
                {
                    type:'carousel',
                    content:[
                        {
                            title: 'CARD_1_TITLE',
                            imageUrl: `${franchiseInfo.pictureUrl[0]}`,
                            buttons: [
                              {
                                title: 'BUTTON_1_TITLE',
                                type: 'postback',
                                value: 'BUTTON_1_VALUE'
                              }
                            ]
                          },
                          {
                            title: 'CARD_1_TITLE',
                            imageUrl: `${franchiseInfo.pictureUrl[1]}`,
                            buttons: [
                              {
                                title: 'BUTTON_1_TITLE',
                                type: 'postback',
                                value: 'BUTTON_1_VALUE'
                              }
                            ]
                          },
                          {
                            title: 'CARD_1_TITLE',
                            imageUrl: `${franchiseInfo.pictureUrl[2]}`,
                            buttons: [
                              {
                                title: 'BUTTON_1_TITLE',
                                type: 'postback',
                                value: 'BUTTON_1_VALUE'
                              }
                            ]
                          },

                          {
                            title: 'CARD_1_TITLE',
                            imageUrl: `${franchiseInfo.pictureUrl[3]}`,
                            buttons: [
                              {
                                title: 'BUTTON_1_TITLE',
                                type: 'postback',
                                value: 'BUTTON_1_VALUE'
                              }
                            ]
                          },
                          {
                            title: 'CARD_1_TITLE',
                            imageUrl: `${franchiseInfo.pictureUrl[4]}`,
                            buttons: [
                              {
                                title: 'BUTTON_1_TITLE',
                                type: 'postback',
                                value: 'BUTTON_1_VALUE'
                              }
                            ]
                          },
                          {
                            title: 'CARD_1_TITLE',
                            imageUrl: `${franchiseInfo.pictureUrl[5]}`,
                            buttons: [
                              {
                                title: 'BUTTON_1_TITLE',
                                type: 'postback',
                                value: 'BUTTON_1_VALUE'
                              }
                            ]
                          },
                          {
                            title: 'CARD_1_TITLE',
                            imageUrl: `${franchiseInfo.pictureUrl[6]}`,
                            buttons: [
                              {
                                title: 'BUTTON_1_TITLE',
                                type: 'postback',
                                value: 'BUTTON_1_VALUE'
                              }
                            ]
                          },
                          {
                            title: 'CARD_1_TITLE',
                            imageUrl: `${franchiseInfo.pictureUrl[7]}`,
                            buttons: [
                              {
                                title: 'BUTTON_1_TITLE',
                                type: 'postback',
                                value: 'BUTTON_1_VALUE'
                              }
                            ]
                          },
                          {
                            title: 'CARD_1_TITLE',
                            imageUrl: `${franchiseInfo.pictureUrl[8]}`,
                            buttons: [
                              {
                                title: 'BUTTON_1_TITLE',
                                type: 'postback',
                                value: 'BUTTON_1_VALUE'
                              }
                            ]
                          },
                    ]
                }
            ]
        })
}
 
else if(franchiseInfo.pictureUrl[23]==null && franchiseInfo.pictureUrl[22]){
                      
                      
    res.json({
        replies:[
           
            {
                type: 'list',
                content: {
                
                  elements: [
                    {
                      title:`${franchiseInfo.names[0]}, (${franchiseInfo.year[0]})`,
                      imageUrl:`${franchiseInfo.pictureUrl[0]}`,
                      subtitle:`IMDB: ${franchiseInfo.imdbRating[0]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[0]} ${tomatoPhoto(franchiseInfo.RottenTomatoes[0])}` ,
                      buttons: [
                        {
                          title: `Story of Hulk`,
                          type: 'postback',
                          value:`Story of Hulk`
                        },
                      ],
                      

                    },
                    {
                        title:`${franchiseInfo.names[1]}, (${franchiseInfo.year[1]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[1]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[1]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[1]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[1])}` ,
                        buttons: [
                          {
                            title: `Story of the Incredible Hulk`,
                            type: 'postback',
                            value: 'Story of the Incredible Hulk'
                          }
                        ],
                      
                      },
                      {
                        title:`${franchiseInfo.names[2]}, (${franchiseInfo.year[2]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[2]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[2]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[2]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[2])}` ,
                        buttons: [
                          {
                            title: `Story of Spider Man`,
                            type: 'postback',
                            value: 'Story of Spider Man'
                          }
                        ],
                      },
                      {
                        title:`${franchiseInfo.names[3]}, (${franchiseInfo.year[3]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[3]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[3]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[3]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[3])}` ,
                        buttons: [
                          {
                            title: `Story of Spider Man 2`,
                            type: 'postback',
                            value: 'Story of Spider Man 2'
                          }
                        ],
                      },
                   
                    ],
                     
                   
                      
                 
               
                 
                }
              },
              {
                type: 'list',
                content: {
                
                  elements: [
                    {
                        title:`${franchiseInfo.names[4]}, (${franchiseInfo.year[4]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[4]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[4]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[4]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[4])}` ,
                        buttons: [
                          {
                            title: `Story of Spider Man 3`,
                            type: 'postback',
                            value: 'Story of Spider Man 3'
                          }
                        ],
                      },
                      {
                        title:`${franchiseInfo.names[5]}, (${franchiseInfo.year[5]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[5]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[5]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[5]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[5])}` ,
                        buttons: [
                          {
                            title: `Story of TAS`,
                            type: 'postback',
                            value: 'Story of TAS'
                          }
                        ],
                      },
                      {
                        title:`${franchiseInfo.names[6]}, (${franchiseInfo.year[6]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[6]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[6]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[6]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[6])}` ,
                        buttons: [
                          {
                            title: `Story of TAS 2`,
                            type: 'postback',
                            value: 'Story of TAS 2'
                          }
                        ],
                      },

                      {
                        title:`${franchiseInfo.names[7]}, (${franchiseInfo.year[7]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[7]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[7]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[7]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[7])}` ,
                        buttons: [
                          {
                            title: `Story of Iron Man`,
                            type: 'postback',
                            value: 'Story of Iron Man'
                          }
                        ],
                      },
                  ],
                }
              },
              {
                type: 'list',
                content: {
                
                  elements: [
                    {
                        title:`${franchiseInfo.names[8]}, (${franchiseInfo.year[8]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[8]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[8]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[8]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[8])}` ,
                        buttons: [
                          {
                            title: `Story of Iron Man 2`,
                            type: 'postback',
                            value: 'Story of Iron Man 2'
                          }
                        ],
                      },
                      {
                        title:`${franchiseInfo.names[9]}, (${franchiseInfo.year[9]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[9]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[9]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[9]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[9])}` ,
                        buttons: [
                          {
                            title: `Story of Iron Man 3`,
                            type: 'postback',
                            value: 'Story of Iron Man 3'
                          }
                        ],
                      },
                      {
                        title:`${franchiseInfo.names[10]}, (${franchiseInfo.year[10]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[10]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[10]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[10]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[10])}` ,
                        buttons: [
                          {
                            title: `Story of Thor`,
                            type: 'postback',
                            value: 'Story of Thor'
                          }
                        ],
                      },

                      {
                        title:`${franchiseInfo.names[11]}, (${franchiseInfo.year[11]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[11]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[11]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[11]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[11])}` ,
                        buttons: [
                          {
                            title: `Story of Thor 2`,
                            type: 'postback',
                            value: 'Story of Thor 2'
                          }
                        ],
                      },

                    
                   
                    ],
                     
                   
                      
                 
               
                 
                }
              },

              {
                type: 'list',
                content: {
                
                  elements: [
                    {
                        title:`${franchiseInfo.names[12]}, (${franchiseInfo.year[12]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[12]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[12]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[12]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[12])}` ,
                        buttons: [
                          {
                            title: `Story of Thor 3`,
                            type: 'postback',
                            value: 'Story of Thor 3'
                          }
                        ],
                      },
                      {
                        title:`${franchiseInfo.names[13]}, (${franchiseInfo.year[13]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[13]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[13]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[13]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[13])}` ,
                        buttons: [
                          {
                            title: `Story of Captain America`,
                            type: 'postback',
                            value: 'Story of Captain America'
                          }
                        ],
                      },
                      {
                        title:`${franchiseInfo.names[14]}, (${franchiseInfo.year[14]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[14]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[14]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[14]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[14])}` ,
                        buttons: [
                          {
                            title: `Story of Captain America 2`,
                            type: 'postback',
                            value: 'Story of Captain America 2'
                          }
                        ],
                      },

                      {
                        title:`${franchiseInfo.names[15]}, (${franchiseInfo.year[15]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[15]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[15]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[15]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[15])}` ,
                        buttons: [
                          {
                            title: `Story of Captain America 3`,
                            type: 'postback',
                            value: 'Story of Captain America 3'
                          }
                        ],
                      },

                    
                   
                    ],
                     
                   
                      
                 
               
                 
                }
              },

              {
                type: 'list',
                content: {
                
                  elements: [
                    {
                        title:`${franchiseInfo.names[16]}, (${franchiseInfo.year[16]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[16]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[16]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[16]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[16])}` ,
                        buttons: [
                          {
                            title: `Story of Avengers`,
                            type: 'postback',
                            value: 'Story of Avengers'
                          }
                        ],
                      },
                      {
                        title:`${franchiseInfo.names[17]}, (${franchiseInfo.year[17]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[17]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[17]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[17]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[17])}` ,
                        buttons: [
                          {
                            title: `Story of Avengers 2`,
                            type: 'postback',
                            value: 'Story of Avengers 2'
                          }
                        ],
                      },
                      {
                        title:`${franchiseInfo.names[18]}, (${franchiseInfo.year[18]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[18]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[18]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[18]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[18])}` ,
                        buttons: [
                          {
                            title: `Story of Avengers 3`,
                            type: 'postback',
                            value: 'Story of Avengers 3'
                          }
                        ],
                      },

                      {
                        title:`${franchiseInfo.names[19]}, (${franchiseInfo.year[19]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[19]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[19]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[19]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[19])}` ,
                        buttons: [
                          {
                            title: `Story of SMH`,
                            type: 'postback',
                            value: 'Story of SMH'
                          }
                        ],
                      },

                    
                   
                    ],
                     
                   
                      
                 
               
                 
                }
              },

              {
                type: 'list',
                content: {
                
                  elements: [
                    {
                        title:`${franchiseInfo.names[20]}, (${franchiseInfo.year[20]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[20]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[20]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[20]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[20])}` ,
                        buttons: [
                          {
                            title: `Story of Doctor Strange`,
                            type: 'postback',
                            value: 'Story of Doctor Strange'
                          }
                        ],
                      },
                      {
                        title:`${franchiseInfo.names[21]}, (${franchiseInfo.year[21]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[21]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[21]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[21]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[21])}` ,
                        buttons: [
                          {
                            title: `Story of GOTG`,
                            type: 'postback',
                            value: 'Story of GOTG'
                          }
                        ],
                      },
                      {
                        title:`${franchiseInfo.names[22]}, (${franchiseInfo.year[22]})`,
                        imageUrl:`${franchiseInfo.pictureUrl[22]}`,
                        subtitle:`IMDB: ${franchiseInfo.imdbRating[22]}, Rotten Tomatoes: ${franchiseInfo.RottenTomatoes[22]}  ${tomatoPhoto(franchiseInfo.RottenTomatoes[22])}`,
                        buttons: [
                          {
                            title: `Story of GOTG 2`,
                            type: 'postback',
                            value: 'Story of GOTG 2'
                          }
                        ],
                      },

                     
                    
                   
                    ],
                     
                   
                      
                 
               
                 
                }
              },
              
        ]
    })
    
        
}


     
         
         
    }

    tomatoPhoto = (photo)=>{

        if(photo>="60%"){
            return '🍅'
        }
        else
        return '🥗'
    }
    
}
module.exports = loadMovieFranchise;