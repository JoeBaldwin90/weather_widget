import React, { Fragment } from "react";

const Widget = ({ loading, location }) => {

    console.log("I'm rendered statically");

  return (
    <Fragment>
      <div className={`widget-container ${loading ? "loading" : null}`}>
        <div className="header pa4">
          <div className="location f2">LOCATION</div>
          <div className="date f3">MON 01 JAN</div>
        </div>
        <div className="hero pa5 tc">
          <p className="celcius f1">0</p>
          <img
            src={`http://openweathermap.org/img/wn/10d@2x.png`}
            alt="Weather Icon"
            className="weather-icon center"
          />
          <p className="description center f2">
            LOADING
          </p>
        </div>
        <div className="weather-info pa4">
          <div className="atmosphere tc">
            <span>HUMIDITY</span>
            <div className="humidity f3">0&#37;</div>
          </div>
          <div className="wind">
            <div className="flex row">
              <div className="mr3">
                <span>WIND</span>
                <div className="f3">0&#176;</div>
              </div>
              <div>
                <span>DIRECTION</span>
                <div className="f3">
                  0
                  <sub>m/s</sub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Widget;
