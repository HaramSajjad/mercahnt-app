import React, { useState } from 'react';
import {Fade} from 'react-reveal';
import { Link } from 'react-router-dom';
import "./styles.css";
const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
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
    <section id='login'>
      <div>
        <Fade cascade>
          <h3 className='text-center text-theme'> Sign In to Merchant </h3>
        </Fade><br />
        <div className='login-container'>
          <Fade delay={300}>
            <form className='login-form'>
              <label> Email </label>
              <input type="email" name='email' value={user.email} onChange={handleInputs} required />
              <label> Password </label>
              <input type="password" name='password' value={user.password} onChange={handleInputs} required />
              <div style={{ textAlign: "right" }}>
                <Link to="/forgot-password">
                  Forgot Password
                </Link>
              </div>
              <br />
              <button type='submit' onClick={handleSubmit}>
                Login
              </button>
              <div style={{ fontSize: "13px", color: "white" }}>
                <br />
                Don't have an account? &nbsp;
                <Link to="/signup">
                  Sign up
                </Link>
              </div>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Login
