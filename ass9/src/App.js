import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Login/Navbar";
//import Login from "./components/Login/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Jobs from "./pages/Jobs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

import React, { useState } from "react";
import PropTypes from "prop-types";
//import "../src/components/Login/Login.css";
import FirstPage from "../src/pages/FirstPage.js";

function App() {
  const [name, setName] = useState();
  const [email, setEmailId] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inside handleSubmit");

    const credentials = {
      name,
      email,
      password,
    };
    return fetch("http://localhost:9000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(" handle submit--> json data " + data);
        console.log(data.token);
        if (data.token === "success") {
          setToken("success");
          console.log("login successful");
        } else {
          setToken("fail");
          console.log("login unsuccessful");
        }
      });
  };
  return token === "success" ? (
    <FirstPage />
  ) : (
    /*<div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username:</p>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <p>Email ID:</p>
          <input type="text" onChange={(e) => setEmailId(e.target.value)} />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        {token === "fail" && <div>wrong password</div> }
      </form>
    </div>*/

    /* <div className="auth-form-container">
            <h2>Login Page</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" id="name" placeholder="full Name"onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmailId(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" onClick={handleSubmit}>Log In</button>
            {token === "fail" && <div>wrong password</div> }
        </form>
        {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */ //}
    //</div>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Name: </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter name"
            />
          </div>
          <br></br>
          <div className="form-group mt-3">
            <label>Email : </label>
            <input
              type="text"
              onChange={(e) => setEmailId(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <br></br>
          <div className="form-group mt-3">
            <label>Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <br></br>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
          {token === "fail" && <div>Wrong Credentials</div>}
        </div>
      </form>
    </div>
  );
}
export default App;
