import { useEffect,useState} from 'react'
import useGeoLocation from '../../hooks/useGeoLocation'

const Humidity = () => {
    const location = useGeoLocation();
    var API_KEY='968bb709b221c8861b8cdf5a834ee79d';
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${API_KEY}`
    var [hum, setHumidity] = useState("")
      useEffect(() => {
        
        fetch(url)
        .then(response =>{
          if(response.ok){
            return response.json();
          }
          throw response;
        })
        .then(data=>{
          let hum= data.daily[0].humidity + "%";
          console.log(hum);
          setHumidity(hum);
        })
        .catch(error=>console.log(error))
      });
    
    return (
        <div>
            {hum}

        </div>
    )
}

export default Humidity