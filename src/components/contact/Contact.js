import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import "./styles.css";
const Contact = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
    <section id='contact'>
      <div>
        <Fade top>
          <p className='text-center text-light'> Get in touch </p>
        </Fade>
        <Fade left cascade>
          <h3 className='text-center text-theme contact-tagline'> CONTACT US </h3>
        </Fade>
        <Fade bottom>
          <p className='text-center text-light'> +923000000000 </p> <br />
        </Fade>
          <div className='contact-container'>
            <Fade delay={300}>
              <form className='contact-form'>
                <label> Name </label>
                <input type="text" name='name' value={user.name} onChange={handleInputs} required />
                <label> Email </label>
                <input type="email" name='email' value={user.email} onChange={handleInputs} required />
                <label> Phone </label>
                <input type="tel" name='phone' value={user.phone} onChange={handleInputs} required />
                <label> Message </label>
                <textarea name='message' value={user.message} onChange={handleInputs} rows={10} required />
                <button type='submit' onClick={handleSubmit}>
                  Send Message
                </button>
              </form>
            </Fade>
          </div>
      </div>
    </section>
  )
}

export default Contact;
