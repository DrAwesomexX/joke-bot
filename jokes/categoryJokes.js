const jDB = require('../JokesDB.json');
const _ = require('lodash');
rendJokes = category => {
  var rendJoke = [];

  jDB.forEach(element => {
    if (element.category.toLowerCase() === category.toLowerCase()) {
      rendJoke.push(element);
      //  name.push(element.title)
    }
  });

  return rendJoke;
};

jokeByType = category => {
  const search = jDB.find(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  if (!search) {
    return null;
  }
  return search;
};

loadJokesByCategory = app => {
  jokesByCategory = (req, res) => {
    const category = req.body.conversation.memory.category;
    const jokeCat = jokeByType(category.value);
    const db = _.sampleSize(rendJokes(category.value), 18);
    console.log(db);

    if (!jokeCat) {
      res.json({
        replies: [
          {
            type: 'text',
            content: 'nooo'
          }
        ]
      });
    } else {
      res.json({
        replies: [
          {
            type: 'text',
            content: [`${db[0].joke}`]
          }
        ]
      });
    }
  };
};

module.exports = loadJokesByCategory;
