function getWeatherData(cb) {
  console.log("Data  Fetching")
  const data = {
      city: "Delhi",
      temperature: 25,
      condition: "Sunny",
      forecast: [23, 24, 26, 25, 24],
      aqi: 50
}
          setTimeout(() => {
              console.log("Data fetched and sent");
      cb(data);
      }, 2000);
  }

function storeInDB(data, cb) {
  console.log("Store data in Db");
  setTimeout(() => {
      console.log("Store successfully");
      cb(data);
  }, 2000);
}

function generateReport(data) {
  console.log("generating data");
      setTimeout(()=>{
          const report = `Weather Report for ${data.city}:
      Temperature: ${data.temperature}°C
      Condition: ${data.condition}
      5-Day Forecast: ${data.forecast.join(', ')}°C
      Air Quality Index: ${data.aqi}`;
      console.log(report);
      },2000)
}
getWeatherData((data)=>{
  storeInDB(data,(data)=>{
      generateReport(data)
  })
})