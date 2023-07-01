import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducer';


const store = createStore(counterReducer);

// JSX element, app, a container or a parent
const app = (
 <Provider store={store}>
 <Home />
 </Provider>
);

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)