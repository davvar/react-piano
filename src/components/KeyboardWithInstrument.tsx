import React, { FC } from 'react';
import { Keyboard } from '.';
import { useAudioContext, useMount, useSoundfont } from '../hooks';

export const KeyboardWithInstrument: FC = () => {
	const AudioContext = useAudioContext()!

	const { load, ...props } = useSoundfont({ AudioContext })

	useMount(load)

	return <Keyboard {...props} />
}
