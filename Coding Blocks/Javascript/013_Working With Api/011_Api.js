// let url ="https://waifu.it/api";
// fetch(url)
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })



let API_key="dff5e7c0bc68af967acfcad87af49a71"
let city_name='Delhi'
let geoCodingApi=`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`
 function getWeather(data){
    let lat=data.lat;
    let lon=data.lon
    let weatherApi=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    fetch(weatherApi)
    .then(data=>data.json())
    .then(data=>{
        console.log(data);
    })
 }
fetch(geoCodingApi)
.then(data=>data.json())
.then(data=>{
    console.log(data[0].lat,data[0].lon);
    return{
        "lat":data[0].lat,
        "lon":data[0].lon
    }
})
.then(getWeather)
.catch(err=>{
    console.error(err)
})