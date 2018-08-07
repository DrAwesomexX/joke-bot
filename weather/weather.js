const axios = require('axios');
const config = require('../config');

const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5';

function loadWeather(app) {
  app.post('/weather', function(req, res) {
    console.log('[GET] /weather');
    const location = req.body.conversation.memory.location;

    return axios
      .get(`${WEATHER_API_URL}/weather`, {
        params: {
          appid: config.Weather_API_KEY,
          lat: Math.round(location.lat),
          lon: Math.round(location.lng),
         
        },
      })
      .then(function(response) {
        const body = response.data;
        if (!body || !body.weather || body.weather.length === 0) {
          return res.json({
            replies: [
              {
                type: 'text',
                content:
                  "I couldn't find any results for this location, could you try again?",
              },
            ],
          });
        }

      
        const temperature = kelvinToCelcius(body.main.temp);
      
        delete req.body.conversation.memory.location;

        return res.json({
          replies: [
            {
              type: 'text',
              content: `temperature  in ${location.formatted} is  ${temperature}°C `,
            },
          ],
          conversation: { memory: req.body.conversation.memory },
        });
      })
      .catch(function(err) {
        console.error('weatherBot::weather error: ', err);
      });
  });
}

module.exports = loadWeather;

function kelvinToCelcius(temp) {
  return Math.round(temp - 273.15);
}

