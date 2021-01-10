import React, { FC } from 'react';

const currentYear = new Date().getFullYear()

export const Footer: FC = () => <footer>{currentYear}</footer>
