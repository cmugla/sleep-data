import React, { Component } from 'react'

import { colors } from '../data/colors.js'

class StageBlockItem extends Component {
  state={}

  render() {
    const { total, duration, type } = this.props
    const durationPercentage = (duration / total) 
    const styleObj = {
      backgroundColor: colors[type],
      height: `${800 * durationPercentage}px`
    }

    return (
      <div className="each-stage" style={styleObj} />
    )
  }
}

export default StageBlockItem