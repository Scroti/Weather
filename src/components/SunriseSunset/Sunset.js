
import React from 'react'

import useGeoLocation from '../../hooks/useGeoLocation';
import { useState,useEffect } from 'react';
import moment from 'moment';
const Sunset = () => {
    const location = useGeoLocation();
    var API_KEY='968bb709b221c8861b8cdf5a834ee79d';
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${API_KEY}`
    
    var [sunset, setSunset] = useState("");
    
      useEffect(() => {
        
        fetch(url)
        .then(response =>{
          if(response.ok){
            return response.json();
          }
          throw response;
        })
        .then(data=>{
          let desc=data.daily[1].sunset;
          let unix_timestamp = desc;
          var date = new Date(unix_timestamp * 1000);
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var formattedTime = ' Soarele apune la: ' +hours + ':' + minutes ;
          setSunset(formattedTime);
        })
        .catch(error=>console.log(error))
      });
    

    return (
        <div>
            {sunset}
        </div>
    )
}

export default Sunset
