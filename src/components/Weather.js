import React,{useState} from 'react'
import DisplayWeather from './DisplayWeather'
import "./weather.css"

const Weather = () => {
    const APIKEY = '05274734b5b13b515b128d43e8cb8a6d'
    
    const [weather, setWeather] = useState([]);
    const [form,setForm] = useState({
        city:'',
        country:'',
    })
  async function weatherData(e){
    e.preventDefault();
    if (form.city ==="") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }


  }  

    const handleChange = (e) =>{
        let name = e.target.name
        let value = e.target.value

        if(name === 'city'){
            setForm({...form,city: value})
        }
        if(name === 'country'){
            setForm({...form,country: value})
        }
        
    }
    return (
        <div className='weather' >
            
            <form>
                <input type='text' name='city' placeholder='City' onChange={(e)=>handleChange(e)} />
                <input type='text' name='country' placeholder='Country' onChange={(e)=>handleChange(e)} />
                <button className='getweather' onClick={e => weatherData(e)}>Submit</button>
            </form>


 {
                (typeof weather.data != 'undefined') ?
                (<div>
                    <DisplayWeather data={weather.data} />
                </div>):null
            }
           
        </div>
    );
}

export default Weather;
