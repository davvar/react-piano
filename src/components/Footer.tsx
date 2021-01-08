import React, { FC } from 'react';
import '../styles/footer.style.css';

export const Footer: FC = () => {
	const currentYear = new Date().getFullYear()
	return <footer>{currentYear}</footer>
}

