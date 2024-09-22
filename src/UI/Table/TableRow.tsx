import { memo, ReactNode, ThHTMLAttributes } from 'react';
import cls from 'classnames';
import styles from './Table.module.scss';

interface Props extends ThHTMLAttributes<HTMLTableRowElement> {
	children: ReactNode;
}

export const TableRow = memo(({ children, ...props }: Props) => {
	return (
		<tr className={cls(styles.table__row)} {...props}>
			{children}
		</tr>
	);
});
