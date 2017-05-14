import React, { Component } from 'react'

class StageBlockItem extends Component {
  state={
    colors: {
      awake: "#FF6384",
      light: "#36A2EB",
      deep: "#FFCE56",
      out: "rgba(75,192,192,1)",
    }
  }

  render() {
    const { total, duration, type } = this.props
    console.log('StageBlockItem duration total', duration, total)
    const durationPercentage = (duration / total) * 100 
    const styleObj = {
      backgroundColor: this.state.colors[type],
      width: `${durationPercentage}%`
    }

    return (
      <div className="each-stage" style={styleObj}>
        <p>{type}</p>
      </div>
    )
  }
}

export default StageBlockItem