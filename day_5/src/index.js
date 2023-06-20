import React from 'react';
import ReactDOM from 'react-dom';
import CountryContainer from './components/CountryContainer';


// JSX element, app, a container or a parent
const app = (
  <>
  <CountryContainer />
  </>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)