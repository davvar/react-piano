import { useRef, useState } from 'react';
import Soundfont, { InstrumentName, Player } from 'soundfont-player';
import { AudioNodesRegistry, MidiValue } from '../../../domain';

interface Settings {
	AudioContext: AudioContextType
}

interface Adapter {
	loading: boolean
	current: Optional<InstrumentName>

	load: (instrument: InstrumentName) => Promise<void>
	play: (note: MidiValue) => Promise<void>
	stop: (note: MidiValue) => Promise<void>
}

export const useSoundfont = ({ AudioContext }: Settings): Adapter => {
	let activeNodes: AudioNodesRegistry = {}
	const [current, setCurrent] = useState<Adapter['current']>(null)
	const [loading, setLoading] = useState(false)
	const [player, setPlayer] = useState<Optional<Player>>(null)

  const audio = useRef(new AudioContext())

	const load: Adapter['load'] = async instrument => {
		setLoading(true)
		const player = await Soundfont.instrument(audio.current, instrument)

		setLoading(false)
		setCurrent(instrument)
		setPlayer(player)
	}

	const play: Adapter['play'] = async note => {
		await resume()
		if (!player) return

		const node = player.play(note.toString())
		activeNodes = { ...activeNodes, [note]: node }
	}

	const stop: Adapter['stop'] = async note => {
		await resume()
		if (!activeNodes[note]) return

		activeNodes[note]!.stop()
		activeNodes = { ...activeNodes, [note]: null }
	}

	async function resume() {
		return audio.current.state === 'suspended'
			? await audio.current.resume()
			: Promise.resolve()
	}

	return { load, play, stop, current, loading }
}
