import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'

class NewQuestion extends Component {

  state = {
    option1: '',
    option2: '',
    goHome: false
  }

  handleFirstOption = (e) => {
    const option1 = e.target.value
    this.setState(() => ({
      option1
    }))
  }

  handleSecondOption = (e) => {
    const option2 = e.target.value
    this.setState(() => ({
      option2
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { option1, option2 } = this.state
    const { dispatch, authedUser } = this.props

    dispatch(handleAddQuestion(option1, option2, authedUser))
    this.setState(() => ({
      option1: '',
      option2: '',
      goHome: true
    }))
  }

  render() {
    const { option1, option2, goHome } = this.state

    if (goHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className='card col-md-8 mx-auto px-0'>
        <div className='card-header text-center bg-white'>
          <h2>Create New Question</h2>
        </div>
        <div className='card-body'>
          <p className='card-text mb-4'>Complete the question: </p>
          <h5 className='font-weight-bold text-dark mb-2'> Would you rather ...</h5>
          <form className='new-tweet' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <input
                placeholder='Enter Option One Text Here'
                type='text'
                className='form-control'
                value={option1}
                onChange={this.handleFirstOption}
              />
            </div>
            <div className='form-group text-center'>OR</div>
            <div className='form-group'>
              <input
                placeholder='Enter Option Two Text Here'
                type='text'
                className='form-control'
                value={option2}
                onChange={this.handleSecondOption}
              />
            </div>
            <button
              type='submit'
              className='btn btn-success btn-block'
              disabled={(option1 === '' || option2 === '')}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}


export default connect(mapStateToProps)(NewQuestion)
