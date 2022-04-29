import React from "react";
import data from "../apikey.json";

export default function Body(props){
    const location = props.Location;
    console.log(location);
    const key = data.key
    const [weatherData, setWeatherData] = React.useState({
        temp: "",
        name :"",
        country:"",
        description:"",
        feels_like : ""
    });

    //fix location data, gets the prev entered city
    React.useEffect(()=>{
        //get lat and lon data for the location
        console.log(location);
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key}`)
            .then(res=>res.json())
            .then(data=>{
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${key}&units=metric`)
                    .then(res=>res.json())
                    .then(data=> {
                        setWeatherData(()=>{
                            const a = {
                                temp: data.main.temp,
                                name : data.name,
                                country: data.sys.country,
                                feels_like: data.main.feels_like,
                                description: data.weather[0].description
                            }
                            //console.log(a)
                            return(a)
                        })
                    })
                })
    }, [location]) //second parameter is dependency array

   // console.log(props.location)
    return(
        <div>
            <div className="weather">
                <div className="temp">
                    {weatherData.temp} °C
                </div>
                <div className="desc">
                    {weatherData.feels_like}  {weatherData.description}
                </div>
                <div className="name">
                    {weatherData.name}, {weatherData.country}
                </div>
            </div>
        </div>
    )
}