import React from "react";

const Forms = () => {
  function handleLinkClick(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    console.log("Form submitted");
    // Add your form submission logic here
  }
  justify;
  return (
    // <form onSubmit={handleSubmit}>
    //   <label>Name:</label>
    //   <input type="text" />
    //   <button type="submit">submit</button>
    // </form>
    <a href="https://www.google.com/" onClick={handleLinkClick}>
      Click me
    </a>
  );
};

export default Forms;
