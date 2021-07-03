import { RECEIVE_USERS, ADD_USER_QUESTION, Add_User_ANSWER } from '../actions/users'

export default function users(state = {}, action){
  switch (action.type)
  {
    case RECEIVE_USERS :
    return {
      ...state,
      ...action.users
    }


    case ADD_USER_QUESTION :
    return {
      ...state,
      [action.question.author]: {
        ...state[action.question.author],
        questions: state[action.question.author].questions.concat([action.question.id])
      }
    }


    case Add_User_ANSWER :
    return {
      ...state,
      [action.answer.authedUser]: {
          ...state[action.answer.authedUser],
          answers: {
          ...state[action.answer.authedUser].answers,
          [action.answer.qid]: action.answer.answer
          }
        }
      }

    default :
      return state
  }
}
