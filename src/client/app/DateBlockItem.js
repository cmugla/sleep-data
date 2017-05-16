import React, { Component } from 'react'

class DateBlockItem extends Component {
  state={}

  handleClickDate = async () => {
    await this.props.update(this.props.index)
    this.props.getData()
  }

  render() {
    let date = this.props.date.toLocaleString()

    return (
      <div className="each-date" onClick={this.handleClickDate}>
        <p>{date}</p>
      </div>
    )
  }
}

export default DateBlockItem