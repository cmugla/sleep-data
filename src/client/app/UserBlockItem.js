import React, { Component } from 'react'

class UserBlockItem extends Component {
  state={}

  handleClickUser = async () => {
    await this.props.update(this.props.user.code)
    this.props.getData()
  }

  render() {
    const { user, activeUser } = this.props

    return (
      <div className={`each-user ${user.code == activeUser ? 'active' : ''}`} onClick={this.handleClickUser}>
        <p>{user.name}</p>
      </div>
    )
  }
}

export default UserBlockItem