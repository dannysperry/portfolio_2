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

    if (this.state.value.length === 0) {
      return null
    }
    this.props.submitMessage(this.state.value)

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
      .then((body) => {

      })
      .catch(function (err) {
        console.log(err)
      });

  }

  render() {
    return (
      <div>
        <form className="ContactForm" onSubmit={this.handleSubmit}>
          <input className="chat_bubble"
                 placeholder="email address"
                 name="email"
                 type="text"
                 value={this.state.email}
                 onChange={this.handleChange.bind(this)} />

          <input className="chat_bubble"
                 placeholder="enter message here"
                 name="value"
                 type="text"
                 value={this.state.value}
                 onChange={this.handleChange.bind(this)} />

          <button className="chat_bubble chat_bubble--response"
                  type="submit"
                  value="Submit">
            ENTER
          </button>
        </form>
      </div>
      
    );
  }
}

export default ContactForm