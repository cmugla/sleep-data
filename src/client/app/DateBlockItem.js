import React, { Component } from 'react'

class DateBlockItem extends Component {
  state={}

  render() {
    const { date } = this.props

    return (
      <div className="each-date">
        <p>{date}</p>
      </div>
    )
  }
}

export default DateBlockItem