function getWeatherData(cb) {
  console.log("fetching data")
   const data = {
      city: "Delhi",
      temperature: 25,
      condition: "Sunny",
      forecast: [23, 24, 26, 25, 24],
      aqi: 50
  };
  setTimeout(() => {
    console.log("Data fetching and sent")
    cb(data);
  }, 2000);
}

  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(typeof(data)===Object){
        resolve(data)
      }else{
        reject("Data not fetched")
      }
    }, 2000);
  })


function storeInDB(data, cb) {
  console.log("storing data in db")
  const data = {
     city: "Delhi",
     temperature: 25,
     condition: "Sunny",
     forecast: [23, 24, 26, 25, 24],
     aqi: 50
 };
 return new Promise((resolve,reject) => {
   setTimeout(() => {
     if(data = true){
       resolve(data)
     }else{
       reject("Data not stored in db")
     }
   }, 2000);
 })
}
  // takes 2 seconds to store in db and then goes to generate report


function generateReport(data) {
  // returns const report = `Weather Report for ${data.city}:
  // Temperature: ${data.temperature}°C
  // Condition: ${data.condition}
  // 5-Day Forecast: ${data.forecast.join(', ')}°C
  // Air Quality Index: ${data.aqi}`;
  // After 2 second
}

getWeatherData();