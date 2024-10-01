import React, { useState } from "react";

const FormsUsingUseState = () => {
  const [user, setUser] = useState({});

  const changeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log("userDetails", user);
    setUser({});
  };

  return (
    <form onSubmit={SubmitForm}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={changeInput}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={changeInput}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormsUsingUseState;
