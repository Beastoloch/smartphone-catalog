import { memo, ReactNode, ThHTMLAttributes } from 'react';
import styles from './Table.module.scss';

interface Props extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
	children: ReactNode;
}

export const TableColumn = memo(({ children, ...props }: Props) => {
	return (
		<th className={styles.table__column} {...props}>
			{children}
		</th>
	);
});
