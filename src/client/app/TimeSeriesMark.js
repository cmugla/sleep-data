import React, { Component } from 'react'

export default class TimeSeriesMark extends Component {
  render() {
    const { label, time, endTime, startTime, total } = this.props
    const timeNumber = new Date(time)
    const timeDiff = (timeNumber.getTime() - startTime) / 1000
    const styleObj = {
      height: `${800 * (timeDiff / total)}px`
    }

    return (
      <div className="each-timeseries" style={styleObj}>
        <p>{label}</p>
      </div>
    )
  }
}