import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Register.css"; // Importing the CSS file for styling
import LockIcon from "@mui/icons-material/Lock";

export const Register = ({ setIsLoggedIn, setUsername }) => {
  // Accept setIsLoggedIn and setUsername as props
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Mock authentication check (replace this with actual login logic)
    if (formData.username === "user" && formData.password === "pass") {
      setIsLoggedIn(true); // Set login state to true
      setUsername(formData.username); // Set username in state
      navigate("/dashboard"); // Redirect to dashboard on successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="register-container">
      <div className="icon">
        <LockIcon />
      </div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Login
        </button>
      </form>
    </div>
  );
};
