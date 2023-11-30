import axios from 'axios';
import {
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILURE,
    ADD_QUESTION_REQUEST,
    ADD_QUESTION_SUCCESS,
    ADD_QUESTION_FAILURE,
    FETCH_ANSWERS_REQUEST,
    FETCH_ANSWERS_SUCCESS,
    FETCH_ANSWERS_FAILURE,
  } from './actionTypes'

export const fetchQuestions = () => async (dispatch) => {
  dispatch({ type: FETCH_QUESTIONS_REQUEST });

  try {
    const response = await axios.get('https://redux-server-mfe8.onrender.com/question');
    dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: response.data });
    console.log(response.data)
  } catch (error) {
    dispatch({ type: FETCH_QUESTIONS_FAILURE, payload: error.message });
  }
};

export const addQuestion = (questionData) => async (dispatch) => {
  dispatch({ type: ADD_QUESTION_REQUEST });

  try {
    const response = await axios.post('https://redux-server-mfe8.onrender.com/question', questionData);
    dispatch({ type: ADD_QUESTION_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_QUESTION_FAILURE, payload: error.message });
  }
};


export const fetchAnswers = () => async (dispatch) => {
  dispatch({ type: FETCH_ANSWERS_REQUEST });

  try {
    const response = await axios.get('https://redux-server-mfe8.onrender.com/answers');
    dispatch({ type: FETCH_ANSWERS_SUCCESS, payload: response.data });
    console.log(response.data)
  } catch (error) {
    dispatch({ type: FETCH_ANSWERS_FAILURE, payload: error.message });
  }
};
