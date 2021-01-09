import clsx from 'clsx';
import React, { FC, ReactEventHandler } from 'react';
import { NoteType } from '../domain';

interface IProps {
	type: NoteType
	label: string
	disabled?: boolean

	onDown: ReactEventHandler<HTMLButtonElement>
	onUp: ReactEventHandler<HTMLButtonElement>
}

export const Key: FC<IProps> = ({ label, type, onDown, onUp, disabled }) => {
	return (
		<button
			onMouseDown={onDown}
			onMouseUp={onUp}
			className={clsx(`key key--${type}`)}
			disabled={disabled}
			type='button'
		>
			{label}
		</button>
	)
}
