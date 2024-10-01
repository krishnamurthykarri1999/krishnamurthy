import React, { useState } from "react";

const UseStateHook = () => {
  const [car, setCar] = useState(
    {
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    }
  );

  function changeCar(){
    setCar({...car, color: "green" });  // spread operator to create a new object with the updated color property.  // useState hook returns a tuple where the first element is the current state and the second element is a function to update it.  //...car spread operator copies all properties from the current car object into a new object.  // The new object's color property is updated to green.  // The updated object is then passed to setCar to update the state.  // The button triggers the changeCar function, which updates the car object's color property.  // The render method re-renders the component with the updated color.  // This demonstrates how useState hook can be used to update state based on user interactions.  // In a real-world application, you would likely use this component to manage state for a form or other interactive elements.  // In this example, the car object is just a simple object with properties for brand, model,
  }


  return (
    <div>
      <h2>Color Brand {car.brand}</h2>
      <h4>Car Details {car.model} {car.year} {car.color}</h4>

      <button onClick={changeCar}>set color green</button>
    </div>
  );
};

export default UseStateHook;
