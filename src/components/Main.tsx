import React, { FC } from 'react';
import { Keyboard, NoAudioMessage } from '.';
import { useAudioContext } from '../hooks';

export const Main: FC = () => {
	const AudioContext = useAudioContext()

	return Boolean(AudioContext) ? <Keyboard /> : <NoAudioMessage />
}
