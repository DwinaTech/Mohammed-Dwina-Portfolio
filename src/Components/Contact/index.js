import React, { Component } from 'react';
import axios from 'axios';
import helper from '../../helpers';
import Spinner from '../Spinner'
import './contact.css';

class Contact extends Component {
  state = {
    fullname: '',
    email: '',
    tel: '',
    message: '',
    fullnameErr: '',
    emailErr: '',
    telErr: '',
    messageErr: '',
    success: false,
    userMessage: '',
    isLoading: false
  }

  validation = () => {
    const { fullname, email, tel, message } = this.state;
    let isError = false;
    if (fullname.length <= 0) {
      isError = true;
      this.setState({
        fullnameErr: "The name field is required *"
      })

    } else if (fullname.length < 4) {
      isError = true;
      this.setState({
        fullnameErr: "The name have to be longer than three characters"
      })

    }

    if (email.length <= 0) {
      isError = true;
      this.setState({
        emailErr: "Eamil field is required *"
      })

    } else if (!helper.emailValidate(email)) {
      isError = true;
      this.setState({
        emailErr: "You have to inter valid email @"
      })

    }

    if (message.length <= 0) {
      isError = true;
      this.setState({
        messageErr: "Message field is required *"
      })

    } else if (message.length < 2) {
      isError = true;
      this.setState({
        messageErr: "Message field have to be longer than two characters"
      })

    }

    if (tel.length <= 0) {
      isError = true;
      this.setState({
        telErr: "Tel field is required *"
      })

    } else if (tel.length <= 9) {
      isError = true;
      this.setState({
        telErr: "Tel field have to be longer than nine numbers"
      })
    }
    return isError
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validation();
    const api = process.env.REACT_APP_HOST_API;
    const data = {
      fullname: this.state.fullname,
      email: this.state.email,
      message: this.state.message,
      tel: this.state.tel
    }
    if (!error) {
      this.setState({ isLoading: true })
      axios.post(`${api}/api/contact`, data).then(newData => {
        if (!newData || newData.length === 0) {
          this.setState({
            success: true,
            userMessage: newData.data.message,
            isLoading: false
          })
        }
        this.setState({
          success: true,
          fullname: '',
          email: '',
          tel: '',
          message: '',
          fullnameErr: '',
          emailErr: '',
          telErr: '',
          userMessage: newData.data.message
        })
        setTimeout(() => this.setState({ isLoading: false }), 3000)
      })
    } else {
      this.setState({ isLoading: false })
    }
  }

  removeFullNameErr = (e) => {
    e.preventDefault();
    if (this.state.fullname.length > 3) {
      this.setState({ fullnameErr: '' })
    }
  }

  removeEmailErr = (e) => {
    e.preventDefault();
    if (this.state.email.length > 0) {
      this.setState({ emailErr: '' })
    }
  }

  removeTelErr = (e) => {
    e.preventDefault();
    if (this.state.tel.length > 0) {
      this.setState({ telErr: '' })
    }
  }

  removeMessageErr = (e) => {
    e.preventDefault();
    if (this.state.message.length > 0) {
      this.setState({ messageErr: '' })
    }
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({
      [e.target.name]: value
    })
  }

  showSuccessMesg = () => {
    if (this.state.success) {
      return <h4 className="success-message">{this.state.userMessage}</h4>
    }
    return null;
  }

  render() {
    const { fullnameErr, emailErr, telErr, messageErr, isLoading } = this.state;
    if (isLoading) {
      return <Spinner />
    }
    return (
      <section className="contact" id="contact">
        {this.showSuccessMesg()}
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h3 className="section-subheading ">I will be happy to hear you.</h3>
        <form className="form">
          <div className="input">
            <input type="text" onChange={this.handleInputChange} onBlur={this.removeFullNameErr} value={this.state.fullname} name="fullname" placeholder="Your Name *" />
            <span className="validate-error">{fullnameErr}</span>
            <input type="email" onChange={this.handleInputChange} onBlur={this.removeEmailErr} value={this.state.email} name="email" placeholder="Your Email *" />
            <span className="validate-error">{emailErr}</span>
            <input type="number" onChange={this.handleInputChange} onBlur={this.removeTelErr} value={this.state.tel} name="tel" placeholder="Your Phone *" />
            <span className="validate-error">{telErr}</span>
          </div>
          <span>
            <textarea onChange={this.handleInputChange} onBlur={this.removeMessageErr} value={this.state.message} name="message" rows="8" placeholder="Your Message *" />
            <span className="validate-error">{messageErr}</span>
          </span>
        </form>
        <button onClick={this.handleSubmit} type="submit">Send Message</button>
      </section>
    )
  }
}

export default Contact;