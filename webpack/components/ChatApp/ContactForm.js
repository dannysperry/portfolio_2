import React, { Component } from 'react'
import PropTypes from 'prop-types'

import request from 'request-promise-native'

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    console.log(this.state.email)
    console.log(this.state.value)
    const options = {
      method: 'POST',
      uri: 'https://dsperry-portfolio.herokuapp.com/contact_me',
      form: {
        from: this.state.email,
        text: this.state.value
      },
      json: true, // Automatically stringifies the body to JSON

    }

    request(options)
      .then(function (body) {
        console.log(body)
      })
      .catch(function (err) {
        console.log(err)
      });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.email} name="email" onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          Message:
          <input type="text" value={this.state.value} name="value" onChange={this.handleChange.bind(this)} />
        </label>
        <button className="btn" type="submit" value="Submit">ENTER</button>
      </form>
    );
  }
}

export default ContactForm