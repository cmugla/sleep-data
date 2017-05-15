import React, { Component } from 'react'

class UserBlockItem extends Component {
  state={}

  handleClickUser = async () => {
    await this.props.update(user.code)
    this.props.getData()
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