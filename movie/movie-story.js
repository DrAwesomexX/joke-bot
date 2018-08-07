const storyDB = require('../storyDB.json');



storyByName = (title)=>{
    const data = storyDB.find(p=>p.title.toLowerCase()==title.toLowerCase());
    if(!data){
        return null
    }
    return data
}

loadMovieStory = (app)=>{

     movieCompleteStory = (req,res)=>{

        const story = req.body.conversation.memory.story;
        const storyInfo = storyByName(story.value);

        if(!storyInfo){

            res.json({
                replies:[
                    {
                        type:'text',
                        content:'I cant find any story of that movie'
                    }
                ]
            })
        }
        else{
            res.json({
                replies:[
                    {
                        type:'text',
                        content:storyInfo.storyC
                    }
                ]
            })
        }
     }
}

module.exports = loadMovieStory;