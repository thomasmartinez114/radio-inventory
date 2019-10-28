import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateRadio extends Component {
  constructor(props) {
    super(props);

    // Binding to each of methods so this doesn't show undefined
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeSerial = this.onChangeSerial.bind(this);
    this.onChangeMdcid = this.onChangeMdcid.bind(this);
    this.onChangeAssigned = this.onChangeAssigned.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      model: '',
      serial: '',
      mdcid: '',
      assigned: '',
      dateIssued: new Date()
    };
  }

  onChangeModel(e) {
    this.setState({
      model: e.target.value
    });
  }

  onChangeSerial(e) {
    this.setState({
      serial: e.target.value
    });
  }

  onChangeMdcid(e) {
    this.setState({
      mdcid: e.target.value
    });
  }

  onChangeAssigned(e) {
    this.setState({
      assigned: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      dateIssued: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const radio = {
      model: this.state.model,
      serial: this.state.serial,
      mdcid: this.state.mdcid,
      assigned: this.state.assigned,
      dateIssued: this.state.dateIssued
    };

    console.log(radio);

    // Take person back to homepage after submitting radio
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Radio Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Model: </label>
            <select ref='userInput' required className='form-control' value={this.state.model} onChange={this.onChangeModel}>
              {this.state.models.map(function(model) {
                return (
                  <option key={model} value={model}>
                    {model}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='form-group'>
            <label>Serial: </label>
            <input type='text' required className='form-control' value={this.state.serial} onChange={this.onChangeSerial} />
          </div>
          <div className='form-group'>
            <label>MDCID: </label>
            <input type='text' className='form-control' value={this.state.mdcid} onChange={this.onChangeMdcid} />
          </div>
          <div className='form-group'>
            <label>Assigned To: </label>
            <input type='text' className='form-control' value={this.state.assigned} onChange={this.onChangeAssigned} />
          </div>
          <div className='form-group'>
            <label>Date: </label>
            <div>
              <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
