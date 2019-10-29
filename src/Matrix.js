import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      currentColor: '#fff'
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell getCurrentColor={this.getCurrentColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  genColor = (hex) => {
    this.setState({
      currentColor: hex
    })
  }

  getCurrentColor = () => (this.state.currentColor)

  render() {
    return (
      <div id="app">
        <ColorSelector genColor={this.genColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}


Matrix.defaultProps = {
  values: chromeBoi
}
