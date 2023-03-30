import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

export default function Login() {
  const [username, setUserName] = useState();
  const [email, setEmailId] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  let handleSubmit = () => {
    //e.preventDefault();
    console.log("inside onsubmit");
    alert("Submit");
    const credentials = {
      username,
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
        console.log(data);
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

  return token==="success" ? <Login/> : (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
