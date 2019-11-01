import React, { Component } from "react";

class App extends Component {
  state = {
    userLatLong: {
      lat: "51.492988",
      long: "-0.167193"
    },
    loading: false,
    widgetData: {}
  };
  //// State

  componentDidMount() {
    this.setState({
      loading: true
    });
    this.getWeather();
  }

  getWeather = () => {
    const { lat, long } = this.state.userLatLong;
    const apiKey = "349a4fd78de1c4a4c581588ddfbf45ef";
    const endPoint = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`;

    fetch(endPoint)
      .then(response => response.json())
      .then(apiData => {
        console.log(apiData);
        this.setState({
          loading: false
        });
      });
  };

  render() {
    return <div>Hello World</div>;
  }
}

export default App;
