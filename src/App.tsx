import React from 'react';
import './App.css';
import { Footer, Logo, Main } from './components';

function App() {
	return (
		<div className='app'>
			<Logo />
			<main className='app-content logo'>
				<Main />
			</main>
			<Footer />
		</div>
	)
}

export default App
