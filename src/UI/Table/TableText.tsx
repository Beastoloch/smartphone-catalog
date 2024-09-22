import { ReactNode, HTMLAttributes, memo } from 'react';
import styles from './Table.module.scss';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	children: ReactNode;
}

export const TableText = memo(({ children, ...props }: Props) => {
	return (
		<p className={styles.table__text} {...props}>
			{children}
		</p>
	);
});
