import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducer';
import Login from './pages/Login';
import './App.css'


const store = createStore(counterReducer);

// JSX element, app, a container or a parent
const app = (
 <Provider store={store}>
 <Login />
 </Provider>
);

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)