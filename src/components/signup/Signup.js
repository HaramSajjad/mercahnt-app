import React, { useState } from 'react'
import {Fade} from 'react-reveal';
import { Link } from 'react-router-dom';
import "./styles.css";
const Signup = () => {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    state: "",
    city: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name, value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login credientials ", user);
  }

  return (
    <section id='signup'>
      <div>
      <Fade cascade>

        <h3 className='text-center text-theme'> Sign Up to Merchant </h3>
      </Fade><br />
        <div className='login-container'>
          <Fade delay={300}>
            <form className='login-form'>
              <label> First Name </label>
              <input type="text" name='firstName' value={user.firstName} onChange={handleInputs} required />
              <label> Last Name </label>
              <input type="text" name='lastName' value={user.lastName} onChange={handleInputs} required />
              <label> Email </label>
              <input type="email" name='email' value={user.email} onChange={handleInputs} required />
              <label> Password </label>
              <input type="password" name='password' value={user.password} onChange={handleInputs} required />
              <label> Country </label>
              <input type="text" name='country' value={user.country} onChange={handleInputs} required />
              <label> State </label>
              <input type="text" name='state' value={user.state} onChange={handleInputs} required />
              <label> City </label>
              <input type="text" name='city' value={user.city} onChange={handleInputs} required />
              <button type='submit' onClick={handleSubmit}>
                Sign Up
              </button>
              <div style={{ fontSize: "13px", color: "white" }}>
                <br />
                Already have an account? &nbsp;
                <Link to="/login">
                  Login
                </Link>
              </div>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Signup
