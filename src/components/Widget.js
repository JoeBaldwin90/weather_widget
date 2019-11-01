import React, { Fragment } from "react";

const Widget = ({ loading, location, data = [] }) => {

  const today = data[0]

  return (
    <Fragment>
      <div className={loading ? "loading" : ""}>I'm in {location ? location : "loading..."}</div>
      {today ? <div>{today.cloud}</div> : <div>Loading weather...</div>}
    </Fragment>
  );
};

export default Widget;
