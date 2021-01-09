import React, { FC } from 'react';
import { Key } from '.';
import { MidiValue, notes, selectKey } from '../domain';

interface IProps {
	loading: boolean
	play: (note: MidiValue) => Promise<void>
	stop: (note: MidiValue) => Promise<void>
}

export const Keyboard: FC<IProps> = ({ loading, play, stop }) => {
	return (
		<div className='keyboard'>
			{notes.map(({ index, midi, octave, type }) => {
				const label = selectKey(octave, index)
				return (
					<Key
						key={midi}
						type={type}
						label={label}
						disabled={loading}
						onDown={() => play(midi)}
						onUp={() => stop(midi)}
					/>
				)
			})}
		</div>
	)
}
