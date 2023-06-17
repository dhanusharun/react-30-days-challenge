import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCard from './components/ProfileCard';

// JSX element, app, a container or a parent
const app = (
  <>
  {/* Day 2 Snippet */}
  {/* <div className='image-wrapper'>
    <ImageHolder image_path={htmllogo} image_name={'html'} image_height={'auto'} image_width={'50%'}></ImageHolder>
    <ImageHolder image_path={csslogo} image_name={'css'} image_height={'auto'} image_width={'55%'}></ImageHolder>
    <ImageHolder image_path={reactlogo} image_name={'react'} image_height={'auto'} image_width={'70%'}></ImageHolder>
  </div> */}
  <ProfileCard />
  </>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)