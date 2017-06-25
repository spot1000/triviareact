import { applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import promise from "redux-promise-middleware"

import reducer from './reducers'

// const middleware = applyMiddleware(promise(), thunk)
// const loggerMiddleware = createLogger()

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(
    thunk
    // loggerMiddleware
  ))
);
