import React from 'react';
import './App.css';
import { Footer, Logo } from './components';

function App() {
	return (
		<div className='App'>
			<Logo />
			<main className='app-content'></main>
			<Footer />
		</div>
	)
}

export default App
