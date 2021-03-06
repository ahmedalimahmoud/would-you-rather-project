export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions(questions){
  return {
    type : RECEIVE_QUESTIONS,
    questions : questions
  }
}

export function addQuestion(question){
  return{
    type : ADD_QUESTION,
    question
  }
}

export function addAnswer(answer)
{
  return{
    type : ADD_ANSWER,
    answer
  }
}
