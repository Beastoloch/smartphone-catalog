import { memo, ReactNode, TableHTMLAttributes } from 'react';
import styles from './Table.module.scss';

interface Props extends TableHTMLAttributes<HTMLTableElement> {
	children: ReactNode;
}

export const Table = memo(({ children, ...props }: Props) => {
	return (
		<table className={styles.table} {...props}>
			{children}
		</table>
	);
});
