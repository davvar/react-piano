import React, { FC } from 'react';
import { NoAudioMessage } from '.';
import { useAudioContext } from '../hooks';
import { Playground } from './Playground';

export const Main: FC = () => {
	const AudioContext = useAudioContext()

	return Boolean(AudioContext) ? <Playground /> : <NoAudioMessage />
}
