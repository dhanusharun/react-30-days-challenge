import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Reaction from './pages/Reaction'
import Memory from './pages/Memory';
import Verbal from './pages/Verbal';
import Visual from './pages/Visual';


// JSX element, app, a container or a parent
const app = (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/reaction" element={<Reaction />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/verbal" element={<Verbal />} />
        <Route path="/visual" element={<Visual />} />
      </Routes>
    </Router>
);

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)