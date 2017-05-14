import '../css/base.css'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Doughnut, Line, Bar } from 'react-chartjs-2';

import EachStageItem from './EachStageItem.js'

import AjaxAdapter from '../helpers/ajaxAdapter.js'

const ajax = new AjaxAdapter(fetch)

export default class App extends Component {
  state={
    rawData: null,
    prettyData: null,
  }

  componentDidMount = () => {
    ajax.getSleepData("userOne").then(data => {
      console.log(data)
      this.setState({
        rawData: data,
        stages: data.intervals[0].stages
      })
      this.setPrettyData()
    })
  }

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

  setStages = () => {

  }

  handleElementClick = elements => {
    console.log('handleElementClick', elements)
  }

  render () {
    console.log("you're excellent");
    console.log("\n.-        -.\n| ,-. ,-.  |\n| |   | |  |\n| `-' `-|  |\n`-     ,| -'\n       `'    ")

    const { durationTotal, stages } = this.state

    const data = {
        labels: ['Item 1', 'Item 2', 'Item 3'],
        datasets: [
            {
                type: 'line',
                label: 'Bar Component',
                data: [10, 20, 30],
            },
            {
                type: 'line',
                label: 'Line Component',
                data: [30, 20, 10],
            }
        ]
    }

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



    return (
      <div>
        <h1>Hello World</h1>
        <div className="stages-container">
          {
            stages
            &&
            stages.map((each, i) => (
              <EachStageItem
                key={`${each.stage}-${i}`}
                total={durationTotal}
                duration={each.duration}
                type={each.stage}
              />
            ))
          }
        </div>
        <Bar data={data} onElementsClick={this.handleElementClick} />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));