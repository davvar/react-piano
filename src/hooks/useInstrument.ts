import { useContext } from 'react';
import { InstrumentContext } from '../state/Instrument/Context';

export const useInstrument = () => useContext(InstrumentContext)
