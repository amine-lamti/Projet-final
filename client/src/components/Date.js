import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Example extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (<div>
      <h4>Start Date</h4>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
            <h4>End date</h4>

      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      /></div>
    );
  }
}
export default Example