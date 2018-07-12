import { createStore as reduxCreateStore } from 'redux'
import reducers from './reducers'

const initialState = {
  modal: null,
  filter: 'all',
}

const createStore = () => {
  if (typeof window === 'undefined') {
    return reduxCreateStore(reducers, initialState)
  }
  return reduxCreateStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}
export default createStore
