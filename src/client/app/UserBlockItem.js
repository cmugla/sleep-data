import React, { Component } from 'react'

class UserBlockItem extends Component {
  state={}

  handleClickUser = () => {
    this.props.getData(this.props.user.code, 0)
  }

  render() {
    const { user } = this.props

    return (
      <div className="each-user" onClick={this.handleClickUser}>
        <p>{user.name}</p>
      </div>
    )
  }
}

export default UserBlockItem