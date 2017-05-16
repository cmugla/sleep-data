import React, { Component } from 'react'

import StageBlockItem from './StageBlockItem.js'

export default class ColumnRight extends Component {
  render() {
    const { stages, durationTotal } = this.props

    return (
      <div className="column-right">
        <div className="stages-container">
          {
            stages
            &&
            stages.map((each, i) => (
              <StageBlockItem
                key={`${each.stage}-${i}`}
                total={durationTotal}
                duration={each.duration}
                type={each.stage}
              />
            ))
          }
        </div>
      </div>
    )
  }
}