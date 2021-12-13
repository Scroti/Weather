
import { Accordion, Card } from 'react-bootstrap';
import './App.css';
import Description from './components/desc/Description';

import Places from './components/places/Places';
import Sunrise from './components/SunriseSunset/Sunrise';
import Sunset from './components/SunriseSunset/Sunset';
import Temperature from './components/temp/Temperature';
function App() {
//   const location = useGeoLocation();
// var API_KEY='968bb709b221c8861b8cdf5a834ee79d';
// var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${API_KEY}`

// var [temp, setTemp] = useState("");
// var [desc, setDesc] = useState("")
//   useEffect(() => {
    
//     fetch(url)
//     .then(response =>{
//       if(response.ok){
//         return response.json();
//       }
//       throw response;
//     })
//     .then(data=>{
//       let desc= (data.current.weather[0]?.description).toUpperCase();
//       let temperature=Math.round(data.current.temp) + '°C';
//       setTemp(temperature);
//       setDesc(desc);
//     })
//     .catch(error=>console.log(error))
//   });

  return (
    <div className="App">
      
      <Temperature></Temperature>
<Places></Places>
<Description></Description>
<Sunrise></Sunrise>
<Sunset></Sunset>
{/* {temp} {desc} */}
     
      
    </div>
  );
}

export default App;
