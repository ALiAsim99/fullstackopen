import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
const Country=({country})=>{
    const [weather,setWeather]=useState(null)
    const api_key = import.meta.env.VITE_SOME_KEY;
    const lat=country.latlng[0];
    const lon=country.latlng[1]
   
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}&units=metric`)
        .then(res=>setWeather(res.data))
    },[])
    const iconUrl = weather ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : '';
    return(
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h2>languages</h2>
            {Object.keys(country.languages).map(l=><li key={l}>{country.languages[l]}</li>)}
            <br/>
            <img src={country.flags.png}/>
            {weather&&<p>temperature {weather.main.temp} Celsius</p>}
            <img src={iconUrl}/>
            
        </div>
    )
}

export default Country