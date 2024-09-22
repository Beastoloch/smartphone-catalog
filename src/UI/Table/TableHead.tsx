import { memo, ReactNode, ThHTMLAttributes } from 'react';
import styles from './Table.module.scss';

interface Props extends ThHTMLAttributes<HTMLTableRowElement> {
	children: ReactNode;
}

export const TableHead = memo(({ children, ...props }: Props) => {
	return (
		<tr className={styles.table__head} {...props}>
			{children}
		</tr>
	);
});
