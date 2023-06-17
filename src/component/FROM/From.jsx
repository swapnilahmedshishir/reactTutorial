import React, { useState } from "react";
import "./From.css";
import { Button } from "react-bootstrap";
export default function From() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const eventEmail = (e) => {
    setEmail(e.target.value);
  };
  const eventName = (e) => {
    setUserName(e.target.value);
  };
  const eventPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    let userInfo = {
      email:email,
      userName : userName,
      password : password
    }
    console.log(userInfo.email, userInfo.userName);
    console.log(userInfo);
  };

  return (
    <div>
      <form className="from" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={eventEmail}
            required
          />
        </div>
        <div>
          <label htmlFor="userName">User Name </label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={eventName}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={eventPassword}
            required
          />
        </div>
        <div>
          <Button type="submit" variant="success" className="increment">
            {" "}
            Submit{" "}
          </Button>{" "}
        </div>
      </form>
    </div>
  );
}
