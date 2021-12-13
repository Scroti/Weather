
import React from 'react'

import useGeoLocation from '../../hooks/useGeoLocation';
import { useState,useEffect } from 'react';
import { DateTime } from 'luxon';
const Sunrise = () => {
    const location = useGeoLocation();
    var API_KEY='968bb709b221c8861b8cdf5a834ee79d';
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${API_KEY}`
    
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
          let desc=data.daily[1].sunrise;
          let hour = DateTime.fromSeconds(desc).c.hour;
          let minute = DateTime.fromSeconds(desc).c.hour;
          if (minute < 10){
              minute = '0' + minute;
          }
         
          setSunrise('Soarele rasare la ora: ' + hour + ':' + minute);
        })
        .catch(error=>console.log(error))
      });
    

    return (
        <div>
            {sunrise}
        </div>
    )
}

export default Sunrise
 