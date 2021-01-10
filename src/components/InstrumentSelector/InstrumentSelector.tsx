import React, { ChangeEvent, FC } from 'react';
import { InstrumentName } from 'soundfont-player';
import { useInstrument } from '../../hooks';
import { options } from './options';

export const InstrumentSelector: FC = () => {
	const { instrument, setInstrument } = useInstrument()
	const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		setInstrument(target.value as InstrumentName)
	}

	return (
		<select className='instruments' value={instrument} onChange={updateValue}>
			{options.map(({ label, value }) => (
				<option value={value} key={value}>
					{label}
				</option>
			))}
		</select>
	)
}
