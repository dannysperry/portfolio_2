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

    this.handleValChange = this.handleValChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleValChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const options = {
      method: 'POST',
      uri: 'https://api.mailgun.net/v3/www.dsperry.com',
      auth: {
        user: 'api:key-e0f635ca8944b302dd273a853cd436f8'
      },
      form: {
        from: this.state.email,
        to: 'me@dsperry.com',
        subject: 'From your website',
        text: this.state.value
      },
      json: true // Automatically stringifies the body to JSON
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
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <label>
          Message:
          <input type="text" value={this.state.value} onChange={this.handleValChange} />
        </label>
        <input type="button" value="Submit" />
      </form>
    );
  }
}

export default ContactForm