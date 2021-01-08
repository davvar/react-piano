import React, { FC } from 'react';
import '../styles/logo.style.css';

export const Logo: FC = () => {
  return (
    <h1 className='logo'>
      <span role='img' aria-label='metal hand emoji'>👋</span>
      <span role='img' aria-label='metal keyboard emoji'>🎹</span>
      <span role='img' aria-label='metal notes emoji'>🎶</span>
    </h1>
  )
}
