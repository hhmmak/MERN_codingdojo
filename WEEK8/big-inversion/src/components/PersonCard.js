import React, { Component } from 'react'
// import BirthdayButton from './BirthdayButton';

class PersonCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age
    };
  }
  
  render() {
    
    return (
      <div className='card'>
        <h3>{this.props.lastName}, {this.props.firstName}</h3>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button onClick={() => this.setState({age: this.state.age + 1})} className={"bdayBtn"}>Birthday Button for {this.props.firstName + " " + this.props.lastName}</button>
      </div>
    )
  }
}

export default PersonCard