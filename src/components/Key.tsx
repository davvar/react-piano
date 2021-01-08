import clsx from 'clsx';
import React, { FC } from 'react';
import { NoteType } from '../domain';

interface IProps {
	type: NoteType
	label: string
	disabled?: boolean
}

export const Key: FC<IProps> = ({ label, type, ...rest }) => {
	return (
		<button className={clsx(`key key--${type}`)} {...rest} type='button'>
			{label}
		</button>
	)
}
