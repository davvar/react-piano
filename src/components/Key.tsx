import clsx from 'clsx';
import React, { FC, ReactEventHandler } from 'react';
import { NoteType } from '../domain';
import { usePressObserver } from '../hooks';

interface IProps {
	type: NoteType
	label: string
	disabled?: boolean

	onDown: ReactEventHandler<HTMLButtonElement>
	onUp: ReactEventHandler<HTMLButtonElement>
}

export const Key: FC<IProps> = ({ label, type, onDown, onUp, disabled }) => {
	const pressed = usePressObserver({
		watchKey: label,
		onStartPress: onDown,
		onFinishPress: onUp,
	})

	return (
		<button
			onMouseDown={onDown}
			onMouseUp={onUp}
			className={clsx(`key key--${type}`, pressed && 'is-pressed')}
			disabled={disabled}
			type='button'
		>
			{label}
		</button>
	)
}
