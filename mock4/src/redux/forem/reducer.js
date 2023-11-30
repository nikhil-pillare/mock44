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
  

  const initialState = {
    answer:[],
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
        case FETCH_ANSWERS_SUCCESS:
          return {
            ...state,
            isLoading: false,
            answer: action.payload,
          };
  
      
  
      default:
        return state;
    }
  };
  
  export default forumReducer;
  