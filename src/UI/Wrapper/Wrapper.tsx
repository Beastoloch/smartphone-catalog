import { HTMLAttributes, memo, ReactNode } from 'react';
import styles from './Wrapper.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

export const Wrapper = memo(({ children, ...props }: Props) => {
	return (
		<div className={styles.wrapper} {...props}>
			{children}
		</div>
	);
});
