import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { LinkReducer } from './reducer'

 const reducers = combineReducers({
     links : LinkReducer
 })
const middleware = [thunk]
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  export default store