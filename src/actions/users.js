export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const Add_User_ANSWER = 'Add_User_ANSWER'

export function receiveUsers(users){
  return {
    type:RECEIVE_USERS,
    users : users
  }
}

export function addUserQuestion(question)
{
  return {
    type:ADD_USER_QUESTION,
    question
  }
}

export function addUserAnswer(answer)
{
  return{
    type : Add_User_ANSWER,
    answer
  }
}
