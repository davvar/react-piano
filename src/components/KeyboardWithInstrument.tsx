import React, { FC, useEffect } from 'react';
import { Keyboard } from '.';
import { useAudioContext, useInstrument, useSoundfont } from '../hooks';

export const KeyboardWithInstrument: FC = () => {
	const AudioContext = useAudioContext()!
	const { load, current, ...props } = useSoundfont({ AudioContext })
	const { instrument } = useInstrument()
	const { loading } = props

	useEffect(() => {
		if (!loading && instrument !== current) {
			load(instrument)
		}
	}, [load, loading, current, instrument])

	return <Keyboard {...props} />
}
