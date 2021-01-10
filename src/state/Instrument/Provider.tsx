import React, { FC, useState } from 'react';
import { DEFAULT_INSTRUMENT } from '../../domain';
import { InstrumentContext } from './Context';

export const InstrumentContextProvider: FC = ({ children }) => {
	const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT)

	return (
		<InstrumentContext.Provider value={{ instrument, setInstrument }}>
			{children}
		</InstrumentContext.Provider>
	)
}
