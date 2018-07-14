import { createDefaultReducer } from '../storeUtility'
import types from './types';

const initialState = {
  number: 0
};

const incrementNumberHandler = (state, payload) => {
  const number = state.number + 1
  return {
    ...state,
    number
  }
};

const decrementNumberHandler = (state, payload) => {
  const number = state.number - 1
  return {
    ...state,
    number
  }
};

const resetNumberHandler = (state, payload) => {
  return {
    ...state,
    number: 0
  }
};

const actionMap = {
  [types.FETCH_USER_REQUEST]: incrementNumberHandler,
  [types.FETCH_USER_SUCCESS]: decrementNumberHandler,
  [types.LOGOUT_USER_REQUEST]: resetNumberHandler,
  [types.LOGOUT_USER_SUCCESS]: resetNumberHandler,
};

export default createDefaultReducer(actionMap, initialState)