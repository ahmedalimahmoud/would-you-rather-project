import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoardItem extends Component {
  render() {
    const { user } = this.props
    const { name, avatarURL, answers, questions } = user
    const answeredQuestions = Object.keys(answers).length;
    const askedQuestions = questions.length;
    const sum = answeredQuestions + askedQuestions;
    return (
      <div className='card mb-4 shadow' >
        <div className='row no-gutters align-middle justify-content-center align-items-center'>
          <div className='col-md-3'>
            <div className='col-md-12'>
              <img
                src={avatarURL}
                className='card-img rounded-circle p-3'
                width="150"
                alt={`Avatar of ${name}`}
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card-body'>
              <h3 className='card-title mb-3'  >{name}  </h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-none border-0 pl-0">Answered Questions  <span className=''>{answeredQuestions}</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center pl-0">Created Questions  <span className=''>{askedQuestions}</span></li>
              </ul>
            </div>
          </div>
          <div className='col-md-3 p-3'>
            <div className='card text-center'>
              <div className='card-header'>
                <h5>Score</h5>
              </div>
              <div className='card-body text-center'>
                <div className='d-inline mx-auto text-white bg-success py-2 px-3 rounded-circle' width='50'>
                  {sum}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id]
  return {
    user
  }
}

export default connect(mapStateToProps)(LeaderBoardItem)
