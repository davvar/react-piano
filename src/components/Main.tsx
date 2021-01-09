import React, { FC } from 'react';
import { KeyboardWithInstrument, NoAudioMessage } from '.';
import { useAudioContext } from '../hooks';

export const Main: FC = () => {
	const AudioContext = useAudioContext()

	return Boolean(AudioContext) ? <KeyboardWithInstrument /> : <NoAudioMessage />
}
