import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';


// JSX element, app, a container or a parent
const app = (
  <>
  <Home />
  </>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)