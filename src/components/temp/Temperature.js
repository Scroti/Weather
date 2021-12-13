import React from 'react'
import './Temperature.css'
import useGeoLocation from '../../hooks/useGeoLocation';
import { useState,useEffect } from 'react';
import moment from 'moment';

const Temperature = () => {
    const location = useGeoLocation();
    var API_KEY='968bb709b221c8861b8cdf5a834ee79d';
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${API_KEY}`
    
    var [temp, setTemp] = useState("");
    var [sunrise, setSunrise] = useState("");
    
      useEffect(() => {
        
        fetch(url)
        .then(response =>{
          if(response.ok){
            return response.json();
          }
          throw response;
        })
        .then(data=>{
          let temperature=Math.round(data.current.temp) + '°C';
          setTemp(temperature);
          
        })
        .catch(error=>console.log(error))
      });
    

    return (
        <div  className="Temperature">
            {
        location.loaded ? " ":<span className='alert'>Please allow your browser to use your location for weather info.</span>
        
}
        {temp}
        </div>
    )
}

export default Temperature
