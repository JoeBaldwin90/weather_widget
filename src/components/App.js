import React, { Component, Fragment } from "react";
import Widget from "./Widget";
import StaticWidget from "./StaticWidget";

class App extends Component {
  state = {
    userLatLong: {
      lat: "51.492988",
      long: "-0.167193"
    },
    widgetData: [],
    userCity: "",
    loading: false
  };
  // State

  componentDidMount() {
    this.setState({
      loading: true
    });
    this.getWeather();
  }
  // CDM

  convertUnixToDate = unix => {
    const d = new Date(unix * 1000);
    const string = d.toString().split(" ");
    return `${string[0]} ${string[2]} ${string[1]}`;
  };
  // convertUnixToDate

  getWeather = () => {
    const { lat, long } = this.state.userLatLong;
    const apiKey = "349a4fd78de1c4a4c581588ddfbf45ef";

    const endPoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;

    fetch(endPoint)
      .then(response => response.json())
      .then(apiData => {
        const temporalData = apiData.list;
        const propData = {};

        propData.location = apiData.city.name;
        propData.weatherIntervals = temporalData.map(record => ({
          date: this.convertUnixToDate(record.dt),
          icon: record.weather[0].icon,
          description: record.weather[0].description,
          temperature: record.main.temp,
          pressure: record.main.pressure,
          humidity: record.main.humidity,
          cloud: record.clouds.all,
          wind: {
            speed: record.wind.speed,
            direction: record.wind.deg
          }
        }));
        // map temporalData to propData

        this.setState((prevState, props) => ({
          ...prevState,
          widgetData: propData.weatherIntervals,
          userCity: propData.location,
          loading: false
        }));

        console.log(propData);
      })
      .catch(error => alert(error));
  };
  // getWeather

  setNewLatLong = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLatLong: {
          lat: position.coords.latitude,
          long: position.coords.longitude
        },
        loading: true
      });
      this.getWeather(); // Trigger API call once navigator has finished loading + state is updated
    });
  };
  // setNewLatLong

  render() {

    const { widgetData, userCity, loading } = this.state

    return (
      <Fragment>
        
        {widgetData.length > 0 ? (
          <Widget
            data={widgetData}
            location={userCity}
            loading={loading}
            setNewLatLong={this.setNewLatLong.bind(this)}
          />
        ) : (
          <StaticWidget
            location={userCity}
            loading={loading}
            setNewLatLong={this.setNewLatLong.bind(this)}
          />
        )}

        <button onClick={this.setNewLatLong} className="mt4">
          Use my location
        </button>
      </Fragment>
    );
  }
}

export default App;
