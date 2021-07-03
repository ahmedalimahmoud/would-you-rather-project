import React, { Component, Fragment } from 'react'

class QuestionOption extends Component{
  state = {
    selectedOption : ''
  }

  handleChange = (e) => {
    const selectedOption = e.currentTarget.value;
    this.setState(() => ({
      selectedOption : selectedOption
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {saveQuestionAnswer} = this.props;
    const {selectedOption} = this.state;
    saveQuestionAnswer(selectedOption);
  }

  render(){
      const {question} = this.props;
      const {selectedOption} = this.state;
      return(
        <Fragment>
          <form onSubmit={this.handleSubmit}>
            <h2 className='card-title mb-4'>Would you rather ...</h2>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type='radio'
                id='optionOne'
                value='optionOne'
                onChange={this.handleChange}
                name='answer'
                checked={selectedOption === 'optionOne' ? true : false}>
              </input>
              <label
                className="form-check-label"
                htmlFor='optionOne'>{question.optionOne.text}
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type='radio'
                id='optionTwo'
                value='optionTwo'
                onChange={this.handleChange}
                name='answer'
                checked={selectedOption === 'optionTwo' ? true : false}>
              </input>
              <label
                className="form-check-label"
                htmlFor='optionTwo'>{question.optionTwo.text}
              </label>
            </div>
            <button
              className='btn btn-success btn-block'
              type='submit'
              disabled={selectedOption === ''}>Submit
            </button>
          </form>
        </Fragment>
      )
  }
}

export default QuestionOption
