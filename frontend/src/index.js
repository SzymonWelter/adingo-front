import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {App} from './App.jsx'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import rootReducer from './reducers'
import {configureFakeBackend} from "./helpers";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

configureFakeBackend();
const loggerMiddleware = createLogger();
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
