import { useEffect,useState}from 'react'
import useGeoLocation from '../../hooks/useGeoLocation';

const Places = () => {
    const location = useGeoLocation();
    //let API_KEY='AIzaSyDMP1ahRe7fr6esBfczsz-cis38s6AvUy0';
    //let url=`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coordinates.lat},${location.coordinates.lng}&key=${API_KEY}`;
    let url=`http://open.mapquestapi.com/geocoding/v1/reverse?key=8GONdXAtpr8ZK0xlzjdyhFt9XQbbTPhL&location=${location.coordinates.lat},${location.coordinates.lng}`;
 

    var [city, setCity] = useState("")
    useEffect(() => {
        fetch(url)
        .then(response =>{
          if(response.ok){
            return response.json();
          }
          throw response.json;
        })
        .then(data=>{
           let cityloc= (data.results[0].locations[0]?.adminArea5).toUpperCase();
           
           setCity(cityloc);
        }).catch(error=>{})
      });
    return (
        <div>
           <p>{city}</p>
        </div>
    )
}

export default Places
