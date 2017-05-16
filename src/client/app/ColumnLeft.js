import React, { Component } from 'react'

import UserBlockItem from './UserBlockItem.js'

import users from '../data/users.js'

export default class ColumnLeft extends Component {
  render() {
    const { activeUser, getData, update } = this.props

    return (
      <div className="column-left">
        <h1>{activeUser}</h1>
        <div className="users-container">
          {
            users
            &&
            users.map((each, i) => (
              <UserBlockItem
                key={`user-${i}`}
                user={each}
                getData={getData}
                activeUser={activeUser}
                update={update}
              />
            ))
          }
        </div>
        
      </div>
    )
  }
}