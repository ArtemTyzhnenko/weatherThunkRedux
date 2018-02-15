import React from 'react';

 const Weather = ({temp,city,weather,pressure,urlForIcon,isFetching}) => (
     <div className={'weather'}>
         <ul>
             <li>City: {city}</li>
             <li>Temperature: {temp}&deg;</li>
             <li>Weather: {weather}</li>
             <li><img src={urlForIcon}  alt=""/></li>
             <li>Pressure: {pressure}</li>
         </ul>
     </div>
 );

 export default Weather;