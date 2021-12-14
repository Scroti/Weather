import React from 'react'
// import './Description.css'
import Temperature from '../temp/Temperature'
import { Accordion } from 'react-bootstrap'
import { useEffect,useState} from 'react'
import useGeoLocation from '../../hooks/useGeoLocation'

const Pressure = () => {
    const location = useGeoLocation();
    var API_KEY='968bb709b221c8861b8cdf5a834ee79d';
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${API_KEY}`
    var [desc, setDesc] = useState("")
      useEffect(() => {
        
        fetch(url)
        .then(response =>{
          if(response.ok){
            return response.json();
          }
          throw response;
        })
        .then(data=>{
          let desc= data.daily[0].pressure ;
          setDesc(desc);
        })
        .catch(error=>console.log(error))
      });
    
    return (
        <div>
            {desc} hPa

        </div>
    )
}

export default Pressure