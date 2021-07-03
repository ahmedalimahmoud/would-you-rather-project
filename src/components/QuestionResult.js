import React, { Component, Fragment } from 'react'

class QuestionResult extends Component {
  render() {
    const { question, vote } = this.props;

    const firstOptionVotes = question.optionOne.votes.length;

    const secondOptionVotes = question.optionTwo.votes.length;

    const numberOfAnswers = firstOptionVotes + secondOptionVotes;

    const percentage1 = firstOptionVotes === 0 ? 0 : Math.round((firstOptionVotes / numberOfAnswers) * 100);

    const percentage2 = secondOptionVotes === 0 ? 0 : Math.round((secondOptionVotes / numberOfAnswers) * 100);

    const firstOptionStyle = { width: `${percentage1}%` }

    const secondOptionStyle = { width: `${percentage2}%` }

    return (
      <Fragment>
        <h2 className='card-title'>Results : </h2>
        <div className='card mb-3'>
        <div className={ 'card-body  '+((vote === 'optionOne')? "bg-success text-white" : "bg-light")}>
            <h6 className='card-text my-2'>{question.optionOne.text} {vote === 'optionOne' && (<span className='badge badge-dark float-right p-1'>Your vote</span>)}</h6>
            <div className="progress progress-lg">
              <div className={"progress-bar  p-2 "+(((vote === 'optionOne')? "bg-primary" : "bg-success"))}  role="progressbar" style={firstOptionStyle} aria-valuenow="percentage1" aria-valuemin="0" aria-valuemax="100">{percentage1}%</div>
            </div>
            <p>{firstOptionVotes} out of {numberOfAnswers} votes</p>
          </div>
        </div>
        <div className='card'>
          <div className={ 'card-body  '+((vote === 'optionTwo')? "bg-success text-white" : "bg-light")}>
            <h6 className='card-text my-2'>{question.optionTwo.text} {vote === 'optionTwo' && (<span className='badge badge-dark float-right p-1'>Your vote</span>)}</h6>
            <div className="progress progress-lg"  >
              <div className={"progress-bar  p-2 "+(((vote === 'optionTwo')? "bg-primary" : "bg-success"))} role="progressbar" style={secondOptionStyle} aria-valuenow="percentage2" aria-valuemin="0" aria-valuemax="100">{percentage2}%</div>
            </div>
            <p>{secondOptionVotes} out of {numberOfAnswers} votes</p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default QuestionResult
