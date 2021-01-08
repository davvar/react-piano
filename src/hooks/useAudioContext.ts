import { useRef } from 'react';
import { accessContext } from '../domain';

export const useAudioContext = (): Optional<AudioContextType> => {
	const AudioCtx = useRef(accessContext())

	return AudioCtx.current
}
