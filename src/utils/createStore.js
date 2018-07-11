import { createStore as reduxCreateStore } from 'redux'
import reducers from './reducers'

const initialState = {
  modal: null,
  filter: 'all',
}

const createStore = () =>
  reduxCreateStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
export default createStore
