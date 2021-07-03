import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from './LeaderBoardItem'

class LeaderBoard extends Component {
  render() {
    const { userIds2 } = this.props;
    return (
      <div className="col-md-8 mx-auto px-0">
        {userIds2.map((id) => (
          <LeaderBoardItem
            key={id}
            id={id}
          />
        ))}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const userIds = Object.keys(users)
  const userIds2 = userIds.sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length));
  return {
    userIds2
  }
}

export default connect(mapStateToProps)(LeaderBoard)
