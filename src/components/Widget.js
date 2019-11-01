import React, { Fragment } from "react";
import MiniRecord from "./MiniRecord"

const Widget = ({ loading, location, data = [], setNewLatLong }) => {
  const today = data[0];

  console.log("I'm rendered dynamically");

  return (
    <Fragment>
      <section className={`widget-container ${loading ? "loading" : null}`}>
        <div className="header pa4">
          <div onClick={setNewLatLong} className="location f2 pointer">
            {location.toUpperCase()}
          </div>
          <div className="date f3">{today.date.toUpperCase()}</div>
        </div>
        <div className="hero pa4 tc">
          <p className="celcius f1">{today.temperature.toFixed(1)}&#176;</p>
          <img
            src={`http://openweathermap.org/img/wn/${today.icon}@2x.png`}
            alt="Weather Icon"
            className="weather-icon center"
          />
          <p className="description center f2">
            {today.description.toUpperCase()}
          </p>
        </div>
        <div className="weather-info pa4">
          <div className="atmosphere tc">
            <span>HUMIDITY</span>
            <div className="humidity f3">{today.humidity}&#37;</div>
          </div>
          <div className="wind">
            <div className="flex row">
              <div className="mr3">
                <span>WIND</span>
                <div className="f3">{today.wind.direction}&#176;</div>
              </div>
              <div>
                <span>SPEED</span>
                <div className="f3">
                  {today.wind.speed}
                  <sub>m/s</sub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`later-data ${loading ? "hidden" : null}`}>
        {data.slice(0, 5).map((record, index) => (
          <MiniRecord index={index} temperature={record.temperature} description={record.description} icon={record.icon} />
        ))}
      </section>
    </Fragment>
  );
};

export default Widget;
