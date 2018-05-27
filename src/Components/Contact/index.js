import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  state = {
    fullname: '',
    email: '',
    tel: null,
    message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      fullname: '',
      email: '',
      tel: '',
      message: ''
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <section className="contact" id="contact">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h3 className="section-subheading ">I will be happy to hear you.</h3>
        <form className="form">
          <div className="input">
            <input onChange={this.handleInputChange} value={this.state.fullname} type="text" name="fullname" placeholder="Your Name" />
            <input onChange={this.handleInputChange} value={this.state.email}  type="email" name="email" placeholder="Your Email" />
            <input onChange={this.handleInputChange} value={this.state.tel}  type="tel" name="tel" placeholder="Your Phone" />
          </div>
          <textarea onChange={this.handleInputChange} value={this.state.message}  name="message" rows="8" placeholder="Your Message" />
        </form>
        <button onClick={this.handleSubmit} type="submit">Send Message</button>
      </section>
    )
  }
}

export default Contact;