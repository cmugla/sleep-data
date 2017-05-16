import '../css/base.css'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Doughnut, Line, Bar } from 'react-chartjs-2';

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
        stages: data.intervals[activeDateIndex].stages
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

  handleElementClick = elements => {
    console.log('handleElementClick', elements)
  }

  render () {
    console.log("\n.-        -.\n| ,-. ,-.  |\n| |   | |  |\n| `-' `-|  |\n`-     ,| -'\n       `'    ")

    const { durationTotal, stages, rawData, activeUser, activeDateIndex } = this.state
    const { updateActiveUser, updateActiveDate, getData, handleElementClick } = this

    return (
      <div>
        <ColumnLeft 
          activeUser={activeUser}
          getData={getData}
          update={updateActiveUser}
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
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));



    // var data = {
    //   labels: ["January", "February", "March", "April", "May", "June", "July"],
    //   datasets: [
    //     {
    //       label: "My First dataset",
    //       fill: true,
    //       lineTension: 0.1,
    //       backgroundColor: "rgba(75,192,192,0.4)",
    //       borderColor: "rgba(75,192,192,1)",
    //       borderCapStyle: 'butt',
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: 'miter',
    //       pointBorderColor: "rgba(75,192,192,1)",
    //       pointBackgroundColor: "#fff",
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //       pointHoverBorderColor: "rgba(220,220,220,1)",
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       spanGaps: false,
    //     },
    //     {
    //       label: "My First dataset",
    //       fill: true,
    //       lineTension: 0.1,
    //       backgroundColor: "rgba(75,192,192,0.4)",
    //       borderColor: "rgba(75,192,192,1)",
    //       borderCapStyle: 'butt',
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: 'miter',
    //       pointBorderColor: "rgba(75,192,192,1)",
    //       pointBackgroundColor: "#fff",
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //       pointHoverBorderColor: "rgba(220,220,220,1)",
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       spanGaps: false,
    //     }
    //   ]
    // };
    //   labels: [
    //     "Red",
    //     "Blue",
    //     "Yellow"
    //   ],
    //   datasets: [
    //     {
    //         data: [300, 50, 100],
    //         backgroundColor: [
    //             "#FF6384",
    //             "#36A2EB",
    //             "#FFCE56"
    //         ],
    //         hoverBackgroundColor: [
    //             "#FF6384",
    //             "#36A2EB",
    //             "#FFCE56"
    //         ]
    //     }
    //   ],
    // };