import '../css/base.css'
import React, { Component } from 'react'
import { render } from 'react-dom'

import StageBlockItem from './StageBlockItem.js'

import ColumnLeft from './ColumnLeft.js'
import ColumnMiddle from './ColumnMiddle.js'
import ColumnRight from './ColumnRight.js'

import AjaxAdapter from '../helpers/ajaxAdapter.js'

const ajax = new AjaxAdapter(fetch)

export default class App extends Component {
  state={
    rawData: null,
    prettyData: null,
    activeUser: 'userOne',
    activeDateIndex: 0,
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    const { activeUser, activeDateIndex } = this.state
    ajax.getSleepData(activeUser).then(data => {
      this.setState({
        rawData: data,
        stages: data.intervals[activeDateIndex].stages,
        sleepScore: data.intervals[activeDateIndex].score,
        timeseries: data.intervals[activeDateIndex].timeseries,
      })
      this.setPrettyData()
    })
  }

  updateActiveUser = (user) => this.setState({
    activeUser: user
  })

  updateActiveDate = (index) => this.setState({
    activeDateIndex: index
  })

  setPrettyData = () => {
    this.setDurationTotal()
  }

  setDurationTotal = () => {
    let durationTotal = 0
    this.state.stages.forEach(stage => {
      durationTotal += stage.duration
    })
    this.setState({ durationTotal })
  }

  render () {
    console.log("\n.-        -.\n| ,-. ,-.  |\n| |   | |  |\n| `-' `-|  |\n`-     ,| -'\n       `'    ")

    const { durationTotal, stages, rawData, activeUser, activeDateIndex, sleepScore, timeseries } = this.state
    const { updateActiveUser, updateActiveDate, getData } = this
    const startTimeDate = rawData && rawData.intervals && rawData.intervals[activeDateIndex].ts && new Date(rawData.intervals[activeDateIndex].ts)
    const startTime = startTimeDate && startTimeDate.getTime()
    const endTime = startTime && (startTimeDate + durationTotal)

    return (
      <div>
        <ColumnLeft 
          activeUser={activeUser}
          getData={getData}
          update={updateActiveUser}
          sleepScore={sleepScore}
        />
        {
          rawData
          &&
          rawData.intervals
          &&
          <ColumnMiddle
            getData={getData}
            activeIndex={activeDateIndex}
            update={updateActiveDate}
            intervals={rawData.intervals}
          />
        }
        <ColumnRight
          stages={stages}
          durationTotal={durationTotal}
          timeseries={timeseries}
          endTime={endTime}
          startTime={startTime}
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));