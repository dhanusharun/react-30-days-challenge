import React from 'react';
import ReactDOM from 'react-dom';
import ImageHolder from './components/ImageHolder';
import htmllogo from './assets/img/html_logo.png'
import csslogo from './assets/img/css_logo.png'
import reactlogo from './assets/img/react_logo.png'

// JSX element, app, a container or a parent
const app = (
  <>
  <div className='image-wrapper'>
    <ImageHolder image_path={htmllogo} image_name={'html'} image_height={'auto'} image_width={'50%'}></ImageHolder>
    <ImageHolder image_path={csslogo} image_name={'css'} image_height={'auto'} image_width={'55%'}></ImageHolder>
    <ImageHolder image_path={reactlogo} image_name={'react'} image_height={'auto'} image_width={'70%'}></ImageHolder>
  </div>
  </>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)