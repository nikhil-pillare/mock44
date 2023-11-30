import {
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILURE,
    ADD_QUESTION_REQUEST,
    ADD_QUESTION_SUCCESS,
    ADD_QUESTION_FAILURE,
   
  } from './actionTypes'
  

  const initialState = {
    question: [],
    isLoading: false,
    isError: false,
  };
  
  const forumReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QUESTIONS_REQUEST:
      case ADD_QUESTION_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: null,
        };
  
      case FETCH_QUESTIONS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          question: action.payload,
        };
  
      case ADD_QUESTION_SUCCESS:
        return {
          ...state,
          isLoading: false,
          question: [...state.question, action.payload],
        };
  
      case FETCH_QUESTIONS_FAILURE:
      case ADD_QUESTION_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: action.payload,
        };
  
      
  
      default:
        return state;
    }
  };
  
  export default forumReducer;
  