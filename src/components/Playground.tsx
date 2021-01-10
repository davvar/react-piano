import React, { FC } from 'react';
import { InstrumentSelector, KeyboardWithInstrument } from '.';
import { InstrumentContextProvider } from '../state/Instrument/Provider';

export const Playground: FC = () => (
	<InstrumentContextProvider>
		<div className='playground'>
			<KeyboardWithInstrument />
			<InstrumentSelector />
		</div>
	</InstrumentContextProvider>
)
