import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  changeColor = (e) => {
    console.log('here in the cell', this.props)
    this.setState({
        color: this.props.setNewColor()
    })
      
  }
  
  render() {
    return (
      <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
