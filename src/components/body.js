import React from "react";
import data from "../apikey.json";
import icons from "../icons.json";

export default function Body(props){
    const location = props.Location;
    const key = data.key
    const [weatherData, setWeatherData] = React.useState({
        temp: "",
        name :"",
        country:"",
        description:"",
        feels_like : ""
    });

    const keywords = ["sunny","clear","rain","clouds","cloudy","snow","thunder","windy","haze","dust","smoke","fog","mist"]

    React.useEffect(()=>{
        //get lat and lon data for the location, then weather data based on lat and lon
        try{
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key}`)
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
        } catch (e) {
            console.log(e);
        }
    }, [location]) //second parameter is dependency array

    const weatherIcon = () =>{
        const a  = weatherData.description;
        let re = new RegExp('(' + keywords.join('|') + ')', 'g'); //regular expression to find the keywords in the string
        const b =  a.toLowerCase().match(re) //get the keywords from the string
        try{
            return (icons[b[0]]); //get the image from JSON based on keyword
        } catch (e){
            console.log(e);
        }
    }
    return(
        <div>
            <div className="body">
                {location &&
                    <div className="weather">
                        <div className="weather-2">
                            <div className="temp-data">
                                <div className="temp">
                                    {weatherData.temp + "°C"}
                                </div>
                                <img src= {weatherIcon()} />
                            </div>
                            <div className="desc">
                                {weatherData.feels_like} °C   {weatherData.description}
                            </div>
                            <div className="name">
                                {weatherData.name}, {weatherData.country}
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div>
                Github:
                <a href="https://github.com/vasup86/WeatherApp-React" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
        </div>
    )
}