import React, {Component} from 'react';
import {connect} from 'react-redux'
import Chart from '../components/chart';
import GoogleMap from '../components/map';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name
    const temp = cityData.list.map(weather => weather.main.temp)
    const pressure= cityData.list.map(weather => weather.main.pressure)
    const humd= cityData.list.map(weather => weather.main.humidity)
    const {lon, lat} = cityData.city.coord
    
    return(
      <tr key={name}>

        <td><GoogleMap lat={lat} lon ={lon}/></td>
        <td><Chart data={temp} color="orange" units="F" /></td>
        <td><Chart data={pressure} color="blue" units="hPa" /></td>
        <td><Chart data={humd} color="red" units="%" /></td>

      </tr>
  )
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Map</th>
            <th>Temp (F)</th>
            <th>Press (HPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}
function mapStateToProps({weather}){

  return {weather};
}

export default connect(mapStateToProps,null)(WeatherList);
