import React, { Component } from 'react'

import DateBlockItem from './DateBlockItem'

import { colorArray } from '../data/colors.js'
import prettyDate from '../data/prettyDate.js'

export default class ColumnMiddle extends Component {
  render() {
    const { intervals, getData, update, activeIndex } = this.props
    const prettyActiveDate = prettyDate(intervals[activeIndex].ts)

    return (
      <div className="column-middle">
        <h2>{prettyActiveDate}</h2>
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
                  <span>{each.label}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}