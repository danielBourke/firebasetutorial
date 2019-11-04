import { createStore, applyMiddleware, compose } from 'redux'
import {postReducer} from "../reducers/index"

import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const store = createStore(
        postReducer, composeEnhancers(applyMiddleware(thunk))
    );
    return store
};




