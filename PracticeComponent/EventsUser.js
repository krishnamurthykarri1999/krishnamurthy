import React from "react";
function Car(props) {
  return <li>I am a {props.name}</li>;
}

function EventUser(props) {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {props.data.map((car) => (
          <Car key={car.id} name={car.name} />
        ))}
      </ul>
    </>
  );
}
export default EventUser;
