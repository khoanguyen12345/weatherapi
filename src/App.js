import React, {useEffect,useState,Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherIcon from './components/weatherIcon.js';
import "./App.css";



export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      weather:null
    }
  }
  getLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{this.currentWeather(position.coords.latitude,position.coords.longitude)})
  }

  currentWeather = async(lat,lon)=>{
    const api = "92fd1b05cf013755d82cb831f5a0ed6b"
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&apiKey=${api}&units=metric`
    let data = await fetch (url)
    let result = await data.json();

    this.setState({weather:result})
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    console.log(this.state.weather)
    if (this.state.weather=== null){
      return <div>Loading</div>
    }
    return (
      <div>
      <div className="container-fluid text-white my-auto">
      <div className="container mx-auto my-4 py-4">
      <div className="row justify-content-center text-center">
        <h1 className="col-12 display-4 my-2 py-3 text-success">
          Khoa's Weather App
        </h1>
        <h2 className="col-12">{this.state.weather.name}</h2>
        <h3 className="col-12 text-danger">{this.state.weather.main.temp}°C {this.state.weather.main.temp*1.8+32}°F</h3>
        <h4 className="col-12">{this.state.weather.weather[0].description}</h4>
        <WeatherIcon image = {this.state.weather.weather[0].description}/>
      </div>
    </div>
      </div>
    </div>
    )
  }
}