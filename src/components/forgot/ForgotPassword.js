import React, { useState } from 'react';
import {Fade} from 'react-reveal';
import "./styles.css";
const ForgotPassword = () => {

  const [user, setUser] = useState({
    email: "",
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
    <section id='forgot-password'>
      <div>
        <Fade cascade>
          <h3 className='text-center text-theme'> Forgot Password </h3>
        </Fade> <br />
        <div className='login-container'>
          <Fade delay={300}>
            <form className='login-form'>
              <label> Email </label>
              <input type="email" name='email' value={user.email} onChange={handleInputs} required />
              <button type='submit' onClick={handleSubmit}>
                Send Reset Email
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword;
