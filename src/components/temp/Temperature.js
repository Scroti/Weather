import React from 'react'
import './Temperature.css'
import useGeoLocation from '../../hooks/useGeoLocation';
import { useState,useEffect } from 'react';
const Temperature = () => {
    const location = useGeoLocation();
    var API_KEY='96bbdb426a88d4ec73fb95be9e3f0d28';
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${API_KEY}`
    
    var [temp, setTemp] = useState("");
    
    
      useEffect(() => {
        
        fetch(url)
        .then(response =>{
          if(response.ok){
            return response.json();
          }
          throw response;
        })
        .then(data=>{
          let temperature = Math.round(data.current.temp)+ '°C';
          console.log(url);
          setTemp(temperature);
          
        })
        .catch(error=>console.log(error))
      });
    

    return (
        <div  className="Temperature">
            <div className = "bg"></div>
        {temp}
        </div>
    )
}

export default Temperature
