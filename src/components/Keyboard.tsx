import React, { FC } from 'react';
import { Key } from '.';
import { notes, selectKey } from '../domain';

export const Keyboard: FC = () => {
	return (
		<div className='keyboard'>
			{notes.map(({ index, midi, octave, type }) => {
				const label = selectKey(octave, index)
				return <Key key={midi} type={type} label={label} />
			})}
		</div>
	)
}
