import React, { Component } from 'react'

export default class Home extends Component {

  state = {
    name: '',
    phone: '',
    date: '',
  }

  handleFormKeyDown(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      this.handleSubmitInfo(e);
    }
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  }

  handlePhoneChange = e => {
    this.setState({ phone: e.target.value });
  }

  handleDateChange = e => {
    this.setState({ date: e.target.value });
  }

  handleSubmitInfo = e => {
    e.preventDefault();
    if (this.state.name !== '' && this.state.number !== '' && this.state.date !== '') {
      alert(`This information will be send to rjaquez@medasf.org\n ${this.state.name} \n ${this.state.phone} \n ${this.state.date}`)
      this.setState({ 
        name: '',
        phone: '',
        date: ''
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12" id="jumbotron">
          <h4>Orientation Info Here</h4>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12" id="registration">
          <div className="reg-form">
            <form onKeyDown={this.handleFormKeyDown} onSubmit={this.handleSubmitInfo}>
              <h4>Name</h4>
              <textarea
                type="text"
                required
                value={this.state.name}
                onChange={this.handleNameChange}
                name="name" 
                className="input-area" 
              />
              <h4>Phone</h4>
              <textarea
                type="text"
                required
                value={this.state.phone}
                onChange={this.handlePhoneChange}
                name="name" 
                className="input-area" 
              />
              <h4>Date/Time</h4>
              <textarea
                type="text"
                required
                value={this.state.date}
                onChange={this.handleDateChange}
                name="name" 
                className="input-area" 
              />
              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
