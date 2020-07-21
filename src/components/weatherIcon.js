import React from 'react'

export default function WeatherIcon(props) {
    let imgLink = ""
    if (props.image === "clear sky"){
        imgLink = "http://openweathermap.org/img/wn/01d@2x.png"
    }else if (props.image === "few clouds"){
        imgLink = "http://openweathermap.org/img/wn/02d@2x.png"
    }
    else if (props.image === "scattered clouds"){
        imgLink = "http://openweathermap.org/img/wn/03d@2x.png"
    }
    else if (props.image === "broken clouds"){
        imgLink = "http://openweathermap.org/img/wn/04d@2x.png"
    }
    else if (props.image === "shower rain"){
        imgLink = "http://openweathermap.org/img/wn/09d@2x.png"
    }
    else if (props.image === "rain"){
        imgLink = "http://openweathermap.org/img/wn/10d@2x.png"
    }
    else if (props.image === "thunderstorm"){
        imgLink = "http://openweathermap.org/img/wn/11d@2x.png"
    }
    else if (props.image === "snow"){
        imgLink = "http://openweathermap.org/img/wn/13d@2x.png"
    }
    else if (props.image === "mist"){
        imgLink = "http://openweathermap.org/img/wn/50d@2x.png"
    }
    return (
        <div>
            <img src = {imgLink} alt= {props.image}/>
        </div>
    )
}
