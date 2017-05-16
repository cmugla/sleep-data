import React, { Component } from 'react'

import DateBlockItem from './DateBlockItem'

import { colorArray } from '../data/colors.js'

export default class ColumnMiddle extends Component {
  render() {
    const { intervals, getData, update, activeIndex } = this.props

    return (
      <div className="column-middle">
        <h2>{intervals && intervals[activeIndex] && intervals[activeIndex].ts}</h2>
        <div className="date-container">
          {
            intervals
            &&
            intervals.map((each, i) => (
              <DateBlockItem
                key={`date-${i}`}
                date={each.ts}
                index={i}
                getData={getData}
                activeIndex={activeIndex}
                update={update}
              />
            ))
          }
        </div>
        <div className="color-key">
          {
            colorArray
            &&
            colorArray.map((each, i) => {
              const bg = { backgroundColor: each.hex }
              return (
                <div className="key-item" key={`key-item-${i}`}>
                  <div className="color-block" style={bg} />
                  <p>{each.label}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}