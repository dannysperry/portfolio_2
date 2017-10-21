import React, { Component } from 'react'
import PropTypes from 'prop-types'

import request from 'request-promise-native'

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      valid: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      valid: this.state.email && this.state.message && true
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.valid) {
      this.props.submitMessage(this.state.message)
    }

    const options = {
      method: 'POST',
      uri: 'https://dsperry-portfolio.herokuapp.com/contact_me',
      form: {
        from: this.state.email,
        text: this.state.message
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
          <input key={['form_input', 0].join(' ')}
                 className="chat_bubble"
                 placeholder="email address"
                 name="email"
                 type="text"
                 value={this.state.email}
                 onChange={this.handleChange} />

          <input key={['form_input', 1].join(' ')}
                 className="chat_bubble"
                 placeholder="enter message here"
                 name="message"
                 type="text"
                 value={this.state.message}
                 onChange={this.handleChange} />

          <button disabled={!this.state.valid}
                  className="chat_bubble chat_bubble--response"
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