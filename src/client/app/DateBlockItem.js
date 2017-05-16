import React, { Component } from 'react'

import prettyDate from '../data/prettyDate.js'

class DateBlockItem extends Component {
  state={}

  handleClickDate = async () => {
    await this.props.update(this.props.index)
    this.props.getData()
  }

  render() {
    const { activeIndex, index } = this.props
    const dateStr = prettyDate(this.props.date)

    return (
      <div className={`each-date ${activeIndex == index ? 'active' : ''}`} onClick={this.handleClickDate}>
        <p>{dateStr}</p>
      </div>
    )
  }
}

export default DateBlockItem