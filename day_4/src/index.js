import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCard from './components/ProfileCard';


// JSX element, app, a container or a parent
const app = (
  <>
  <ProfileCard />
  </>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)