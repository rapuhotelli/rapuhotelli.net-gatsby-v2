import { combineReducers } from 'redux'

function modalReducer(state = null, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        modalContent: action.obj,
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalContent: null,
      }
    default:
      return state
  }
}

function filterReducer(state = 'all', action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default combineReducers({
  modal: modalReducer,
  filter: filterReducer,
})
