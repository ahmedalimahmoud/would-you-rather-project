import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class QuestionItem extends Component {
  render() {
    const { question, user } = this.props
    const { optionOne, optionTwo } = question

    return (
      <div className="card mb-3" >
        <div className="card-header">
          <h5>{user.name} asks : </h5>
        </div>
        <div className="card-body">
          <div className="media">
            <img src={user.avatarURL} className="align-self-center  px-3  rounded-circle" width="130" alt={`Avatar of ${user.name}`} />
            <div className="media-body border-left pl-4">
              <h4 className="mt-0">Would you rather ?</h4>
              <p>{`...${optionOne.text}...`}</p>
              <Link className='btn btn-outline-success btn-block' to={`/questions/${this.props.id}`}>View Poll</Link>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id]
  return {
    user: users[question.author],
    question
  }
}

export default withRouter(connect(mapStateToProps)(QuestionItem))
