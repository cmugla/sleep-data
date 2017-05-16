import React, { Component } from 'react'

import StageBlockItem from './StageBlockItem.js'
import TimeSeriesMark from './TimeSeriesMark.js'

import prettyTime from '../data/prettyTime.js'

export default class ColumnRight extends Component {
  render() {
    const { stages, durationTotal, timeseries, endTime, startTime } = this.props

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
        <div className="tnt-container">
          {
            timeseries
            &&
            timeseries.tnt
            &&
            timeseries.tnt.map((each, i) => (
              <TimeSeriesMark
                key={`tnt-${i}`}
                time={each[0]}
                endTime={endTime}
                startTime={startTime}
                total={durationTotal}
                label={`tnt at ${prettyTime(each[0])}`}
              />
            ))
          }
        </div>
        <div className="temp-room-container">
          {
            timeseries
            &&
            timeseries.tempRoomC
            &&
            timeseries.tempRoomC.map((each, i) => (
              <TimeSeriesMark
                key={`tempRoomC-${i}`}
                time={each[0]}
                endTime={endTime}
                startTime={startTime}
                total={durationTotal}
                label={`Room temp ${each[1].toFixed(1)} C`}
              />
            ))
          }
        </div>
        <div className="respiratory-rate">
          {
            timeseries
            &&
            timeseries.respiratoryRate
            &&
            timeseries.respiratoryRate.map((each, i) => (
              <TimeSeriesMark
                key={`respiratoryRate-${i}`}
                time={each[0]}
                endTime={endTime}
                startTime={startTime}
                total={durationTotal}
                label={`Breath ${each[1].toFixed(1)} BPM`}
              />
            ))
          }
        </div>
        <div className="heart-rate">
          {
            timeseries
            &&
            timeseries.heartRate
            &&
            timeseries.heartRate.map((each, i) => (
              <TimeSeriesMark
                key={`heartRate-${i}`}
                time={each[0]}
                endTime={endTime}
                startTime={startTime}
                total={durationTotal}
                label={`Heart ${each[1].toFixed(1)} BPM`}
              />
            ))
          }
        </div>
        <div className="time-container">
          {
            timeseries
            &&
            timeseries.heartRate
            &&
            timeseries.heartRate.map((each, i) => (
              <TimeSeriesMark
                key={`time-${i}`}
                time={each[0]}
                endTime={endTime}
                startTime={startTime}
                total={durationTotal}
                label={`${prettyTime(each[0])}`}
              />
            ))
          }
        </div>
      </div>
    )
  }
}