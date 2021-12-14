import React from 'react'

import useGeoLocation from '../../hooks/useGeoLocation';
import { useState,useEffect } from 'react';
import moment from 'moment';

const Visibility = () => {
    const location = useGeoLocation();
    var API_KEY='968bb709b221c8861b8cdf5a834ee79d';
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${API_KEY}`
    
    var [Visibility, setVisibility] = useState("");
    
    
      useEffect(() => {
        
        fetch(url)
        .then(response =>{
          if(response.ok){
            return response.json();
          }
          throw response;
        })
        .then(data=>{
            let visibility= data.current.visibility;
            if (visibility>1000){
                visibility = visibility/1000;
                setVisibility(visibility + "km");
            }
            else setVisibility(visibility + "m")
            console.log(visibility);
          //setVisibility(visibility);
          
        })
        .catch(error=>console.log(error))
      });
    

    return (
        <div  className="Visibility">
          {Visibility}
        </div>
    )
}

export default Visibility
