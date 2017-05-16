import React, { Component } from 'react'

import prettyDate from '../data/prettyDate.js'

class DateBlockItem extends Component {
  state={}

  handleClickDate = async () => {
    await this.props.update(this.props.index)
    this.props.getData()
  }

  render() {
    const dateStr = prettyDate(this.props.date)

    return (
      <div className="each-date" onClick={this.handleClickDate}>
        <p>{dateStr}</p>
      </div>
    )
  }
}

export default DateBlockItem