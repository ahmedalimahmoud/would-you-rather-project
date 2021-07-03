import { getInitialData, saveQuestion, saveQuestionAnswer  } from '../utils/api'
import { receiveUsers, addUserQuestion, addUserAnswer } from './users'
import { receiveQuestions, addQuestion, addAnswer } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData(){
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({users, questions}) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(hideLoading())
    })
  }
}

export function handleAddQuestion(optionOneText, optionTwoText, author){
  return(dispatch, getState) => {
    dispatch(showLoading())
    saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then((question) => {
      dispatch(addQuestion(question))
      dispatch(addUserQuestion(question))
    }).then(() => dispatch(hideLoading()))
  }
}

export function handleAddAnswer(authedUser, qid, answer){
  return(dispatch, getState) => {
    dispatch(showLoading())
    saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then(() => {
      dispatch(addAnswer({authedUser,qid,answer}))
      dispatch(addUserAnswer({authedUser,qid,answer}))
    }).then(() => dispatch(hideLoading()))
  }
}
