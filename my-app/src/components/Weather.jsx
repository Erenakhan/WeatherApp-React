// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

 //KEY = "b784ff24feebe997748ed9d90aa77df6"
 //'https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=b784ff24feebe997748ed9d90aa77df6'

import axios from 'axios'
import {useState,useEffect}  from 'react'
import '../App.css';


function Weather (handleChange) {
    const [weather, setWeather] = useState([])
 
    useEffect(() => {
      axios(`http://api.weatherapi.com/v1/forecast.json?key=25c4b91cf6ca4118bb4150709221308&q=${handleChange.handleChange}&days=8`)
      .then((res)=> setWeather(res.data.forecast.forecastday))
      .catch((e) => console.log(e))
  
    },[handleChange.handleChange]);
    console.log(weather)

      
  return (
    <div className='cardDiv'>
  
      
{weather.map((w ,day, key)=>(
          < div className="card" key={key} >{w.date} <br /><img src={w.day.condition.icon} alt ="" />  <br />{w.day.mintemp_c}° / {w.day.maxtemp_c}°
          </div>
        
        ))} 

   </div>
  )
  }

export default Weather;