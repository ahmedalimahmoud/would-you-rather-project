import React, { Component } from 'react'
import QuestionItem from './QuestionItem'
import { connect } from 'react-redux'

const SHOW_UNANSWERED_QUESTIONS = 'SHOW_UNANSWERED_QUESTIONS'
const SHOW_ANSWERED_QUESTIONS = 'SHOW_ANSWERED_QUESTIONS'

class Questions extends Component {
  state = { showQuestions: SHOW_UNANSWERED_QUESTIONS }

  handleQuestion = (e) => {
    e.preventDefault()
    var toggle = e.target.getAttribute('data-toggle');
    if (toggle) {
      this.setState(() => ({
        showQuestions: toggle
      }))
    }
  }

  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;
    const unansweredQuestionsOrdered = unansweredQuestions
    const answeredQuestionsOrdered = answeredQuestions
    return (
        <div className="card col-md-6 mx-auto px-0 overflow-hidden mb-5">
          <div className='card-header row text-center p-0' >
            <div
              onClick={this.handleQuestion}
              role="button"
              className={'col-md-6 p-2 font-weight-bold pointer  '+ ((this.state.showQuestions === SHOW_UNANSWERED_QUESTIONS) ? 'text-success bg-light border' : 'bg-white')}
              data-toggle={SHOW_UNANSWERED_QUESTIONS}
              id='toggleQuestionsUnAnswered'
              disabled={this.state.showQuestions === SHOW_UNANSWERED_QUESTIONS}>
              Unanswered Questions
            </div>
            <div
              onClick={this.handleQuestion}
              className={'col-md-6 p-2 font-weight-bold pointer '+ ((this.state.showQuestions === SHOW_ANSWERED_QUESTIONS) ? 'text-success bg-light border' : 'bg-white')}
              data-toggle={SHOW_ANSWERED_QUESTIONS}
              id='toggleQuestionsAnswered'
              disabled={this.state.showQuestions === SHOW_ANSWERED_QUESTIONS}>
              Answered Questions
            </div>
          </div>
        <div className="card-body">
        {this.state.showQuestions === SHOW_UNANSWERED_QUESTIONS && (
          <div id='unansweredQuestions'>
            {unansweredQuestionsOrdered.map((id) => (
              <QuestionItem key={id} id={id} />
            ))}

            {unansweredQuestions.length === 0 && (
              <div className="text-center"><h1>No Questions to answer</h1></div>
            )}
          </div>
        )}
        {this.state.showQuestions === SHOW_ANSWERED_QUESTIONS && (
          <div id='answeredQuestions'>
            {answeredQuestionsOrdered.map((id) => (
              <QuestionItem key={id} id={id} />
            ))}
          </div>
        )}
        </div>
        </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  const unansweredQuestions = Object.values(questions).filter((question) =>
    !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))
  const answeredQuestions = Object.values(questions).filter((question) =>
    question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
  return {
    unansweredQuestions: Object.values(unansweredQuestions).sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
    answeredQuestions: Object.values(answeredQuestions).sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id)
  }
}

export default connect(mapStateToProps)(Questions)
