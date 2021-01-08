import React from 'react';
import './App.css';
import { Footer, Logo, Main } from './components';

function App() {
	return (
		<div className='App'>
			<Logo />
			<main className='app-content'>
				<Main />
			</main>
			<Footer />
		</div>
	)
}

export default App
