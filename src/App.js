import { Card } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Slider from '@mui/material/Slider';
import './App.css';
import Description from './components/desc/Description';
import Humidity from './components/humidity/Humidity';
import { useEffect, useState } from 'react';
import Places from './components/places/Places';
import Pressure from './components/pressure/Pressure';
import Sunrise from './components/SunriseSunset/Sunrise';
import Sunset from './components/SunriseSunset/Sunset';
import Temperature from './components/temp/Temperature';
import Visibility from './components/visibility/Visibility';
import Wind from './components/wind/Wind';
import FTemp from './components/fel-temp/FTemp';
import Uvindex from './components/uvindex/Uvindex';
import useGeoLocation from './hooks/useGeoLocation';
function App() {
  const location = useGeoLocation();
  var API_KEY='96bbdb426a88d4ec73fb95be9e3f0d28';
  var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${API_KEY}`
  
  var [uvi, setUVI] = useState("");
  
  
    useEffect(() => {
      
      fetch(url)
      .then(response =>{
        if(response.ok){
          return response.json();
        }
        throw response;
      })
      .then(data=>{
        let uvi =data.current.uvi;
        
        setUVI(uvi);
        
      })
      .catch(error=>console.log(error))
    });
  
function returnUvi(uvi){
  if(uvi<2){
    return 'Indicele UV este: Scazut'
  }
  else if(uvi>2 && uvi <=5)
  {
    return 'Indicele UV este: Moderat'
  }
  else if(uvi>5 && uvi<8){
    return 'Indicele UV este: Inalt'
  }
  else if(uvi>8 && uvi <11){
    return 'Indicele UV este : Foarte Inalt'
  }
  else return 'Indicele UV este : Extrem'
}
function valuetext(value) {
  return `${value}°C`;
}
  return (
    <div className="App">
      
 <Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Subtitle className="mb-2 text-muted">UV Index</Card.Subtitle>
    <Card.Title><Uvindex></Uvindex></Card.Title>
    
   
    <Slider className = 'Slider'
        aria-label="UV Index"
        defaultValue={uvi}
        step={1}
        max= {11}
        sx={{ opacity: 0.5,
    backgroundColor: '#bfbfbf',}}
      />
       <Card.Text>
      {returnUvi(uvi)}
      </Card.Text>
  </Card.Body>
</Card>
<Temperature></Temperature>
<Places></Places>
 <Description></Description>
<Sunrise></Sunrise>
<Sunset></Sunset>
<Humidity></Humidity>
<Pressure></Pressure>
<Visibility></Visibility>
 <Wind></Wind>
 <FTemp></FTemp>
    </div>
  );
}

export default App;
