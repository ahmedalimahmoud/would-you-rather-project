import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionResult from './QuestionResult'
import QuestionOption from './QuestionOption'
import { handleAddAnswer } from '../actions/shared'
import NotFound from './NotFound'

class QuestionDetail extends Component {
  render() {
    const { question, questionExists, isAnswered, user, vote } = this.props;
    if (questionExists) {
      return (
        <div className="card col-md-8 mx-auto px-0" >
          <div className="card-header">
            <h5>{user.name} asks : </h5>
          </div>
          <div className="card-body">
            <div className="media">
              <img src={user.avatarURL} className="align-self-center  px-3  rounded-circle" width="200" alt={`Avatar of ${user.name}`} />
              <div className="media-body border-left pl-4">
                {isAnswered && (
                  <QuestionResult
                    question={question}
                    vote={vote}
                  />
                )}
                {!isAnswered && (
                  <QuestionOption
                    question={question}
                    saveQuestionAnswer={this.saveQuestionAnswer}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

      )
    }
    else {
      return (
        <NotFound />
      )
    }
  }

  saveQuestionAnswer = (selectedOption) => {
    const { dispatch, authedUser, id } = this.props;
    dispatch(handleAddAnswer(authedUser, id, selectedOption));
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const id = props.match.params.id;
  const question = questions[id];
  const questionExists = !question ? false : true;
  const isAnswered = !!question ? (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)) : false;
  const vote = isAnswered ? (question.optionOne.votes.includes(authedUser) ? 'optionOne' : 'optionTwo') : null;
  const user = (users && question) ? users[question.author] : null;
  return {
    id,
    authedUser,
    question,
    questionExists,
    isAnswered,
    user,
    vote
  }
}

export default connect(mapStateToProps)(QuestionDetail)
