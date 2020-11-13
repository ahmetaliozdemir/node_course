const request = require("request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");
const yargs = require("yargs");
// const url =
//   "http://api.weatherstack.com/current?access_key=444dcda380af32fa8298516af7dd7d85&query=&units=f";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     const weather = response.body.current;
//     console.log(
//       `${weather.weather_descriptions[0]} It is currently ${weather.temperature} degress out. There is a ${weather.humidity}% humidty.`
//     );
//   }
// });

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/turkey.json?access_token=pk.eyJ1IjoibXVtaW5qYWNrIiwiYSI6ImNraDV2bHdmbTA3YmUycnFjMWVoZWdwN2IifQ.PKT6UW9QOVMOSJBRZqb5hw'
// request({url: geocodeURL,json:true}, (error,response) => {
//     if(error){
//         console.log('Unable to connect to geo service!');
//     }else if(response.body.features.length === 0){
//         console.log('Unable to find location');
//     }
//     else{
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[1].center[1];
//         console.log(`Latitude: ${latitude}`)
//         console.log(`Longitude: ${longitude}`)
//     }

// })

// const weather = (data, callback) => {
//   const url = `http://api.weatherstack.com/current?access_key=444dcda380af32fa8298516af7dd7d85&query=${data.latitude},${data.longitude}&units=f`;
//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to weather service!", undefined);
//     } else if (response.body.error) {
//       callback("Unable to find location", undefined);
//     } else {
//       const weather = response.body.current;
//       callback(undefined,
//         `${weather.weather_descriptions[0]} It is currently ${weather.temperature} degress out. There is a ${weather.humidity}% humidty.`
//       );
//     }
//   });
// };
// geocode("Ankara", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     weather(data, (error,response) => {
//       console.log(response);
//       console.log(data)
//     });
//   }
// });

// forecast((35.17), (51), (error, data) => {
//   console.log(error);
//   console.log(data);
// });

const address = process.argv[2];

yargs.version("1.1.0");
yargs.command({
  command: "list",
  describe: "Get Note List",
  handler() {
    console.log("List");
  },
});
yargs.command({
  command: "geocode",
  describe: "Input for geocode",
  builder: {
    country: {
      describe: "Geocode country",
      demandOption: false,
      type: "string",
    },
    latitude: {
      describe: "Geocode latitude",
      demandOption: false,
      type: "string",
    },
    longitude: {
      describe: "Geocode longitude",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    if (argv.country) {
      geocode(argv.country, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          forecast(data.latitude, data.longitude, (error, data) => {
            if (error) {
              console.log(error);
            } else {
              console.log(data);
            }
          });
        }
      });
    } else if (argv.latitude & argv.longitude) {
      console.log(`${argv.latitude}, ${argv.longitude}`);
      forecast(argv.latitude, argv.longitude, (error, data) => {
        console.log(error);
        console.log(data);
      });
    } else {
      console.log("Not information.");
    }
  },
});

if (address) {
  geocode(address, (error, {latitude,longitude,location} = {}) => {
    if (error) {
      console.log(error);
    } else {
      forecast(latitude, longitude, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          console.log(data);
        }
      });
    }
  });
}else {
  console.log("Not information.");
}


yargs.parse();
// geocode("turkey", (err, data) => {
//   console.log(data);
// });
