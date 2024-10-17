import {useState,useReducer, useEffect} from "react";
import "./App.css"
import quizData from "./data/quizData.json"

const initialState = {
  questions : [],
  status: 'loading',
  index : 0,
  answer : null,
  secondsRemaining: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'dataRecived':
      return {
        ...state,
        questions : action.questions,
        status : 'ready'
      }
  }
}

function App() {

  const [{questions, status, index, answer, secondsRemaining},dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type : 'dataRecived', payload: quizData})
  })


  return (
    <div>App</div>
  )
}

export default App