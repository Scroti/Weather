import React from 'react'

import useGeoLocation from '../../hooks/useGeoLocation';
import { useState,useEffect } from 'react';
const Wind = () => {
    const location = useGeoLocation();
    var API_KEY='96bbdb426a88d4ec73fb95be9e3f0d28';
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${API_KEY}`
    
    var [temp, setWind] = useState("");
    
    
      useEffect(() => {
        
        fetch(url)
        .then(response =>{
          if(response.ok){
            return response.json();
          }
          throw response;
        })
        .then(data=>{
          let temperature =Math.round(data.current.feels_like);
          console.log(data);
          setWind(temperature);
          
        })
        .catch(error=>console.log(error))
      });
    

    return (
        <div  className="Wind">
            
        {temp}
        </div>
    )
}

export default Wind