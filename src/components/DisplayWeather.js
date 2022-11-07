import React from "react";
import "./displayweather.css";

const DisplayWeather = (props) => {
  const { data } = props;
const iconurl = `http://openweathermap.org/img/wn/${data.cod !== 404 ? data.weather[0].icon : null}.png`;

  return (
    <div className="displayweather">
      
      {data.cod !== 404 ?(
        <React.Fragment>
            <div className="maincard">
        <span className="cardtitle">
          {data.name},{data.sys.country} Weather
        </span>
        <span className="cardsubtitle">{new Date().toLocaleTimeString()}</span>
        <h1>{Math.round(data.main.temp)}<sup>o</sup>C</h1>
        <span className="weather-main">{data.weather[0].main}</span>
        <img src={iconurl} className='weather-icon' alt=''  />
        <span className="weather-description">
            {data.weather[0].description}
        </span>
      </div>
      <div className="weather-details">
        <div className="section1">
            <table></table>
               
      </div>
      </div>
        </React.Fragment>
        ) : (
            
            <div className="maincard">
                console.log({data.cod})
              <h2>{data.message}</h2>
            </div>
          )}
      
    </div>
  )
}

export default DisplayWeather;
