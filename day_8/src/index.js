import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer';


// JSX element, app, a container or a parent
const app = (
  <>
  <MainContainer />
  </>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)