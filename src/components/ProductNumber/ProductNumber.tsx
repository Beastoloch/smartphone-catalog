import cls from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { catalogActions, catalogSelectors } from '@/components/Comparison';
import styles from './ProductNumber.module.scss';
import { useMemo } from 'react';
import {
	MAX_SHOW_SMARTPHONES_COUNT,
	MIN_SHOW_SMARTPHONES_COUNT,
} from '@/components/Comparison/const/phones';

export const ProductNumber = () => {
	const dispatch = useDispatch();
	const showSmartphoneCount = useSelector(catalogSelectors.showSmartphoneCount);
	const smartphonesCount = useSelector(catalogSelectors.smartphonesCount);

	const numbers = useMemo(() => {
		const maxCount =
			smartphonesCount >= MAX_SHOW_SMARTPHONES_COUNT
				? MAX_SHOW_SMARTPHONES_COUNT
				: smartphonesCount;

		if (!maxCount) {
			return [];
		}

		return Array.from(Array(maxCount - 1), (_, idx) => idx + MIN_SHOW_SMARTPHONES_COUNT);
	}, [smartphonesCount]);

	return (
		<div className={styles.productNumber}>
			<p className={styles.productNumber__text}>Отобразить товары:</p>
			<div className={styles.productNumber__numbers}>
				{numbers.map((number) => (
					<p
						key={number}
						onClick={() => dispatch(catalogActions.setShowSmartphoneCount(number))}
						className={cls(styles.productNumber__text, styles.productNumber__num, {
							[styles.productNumber__num_active]: showSmartphoneCount === number,
						})}
					>
						{number}
					</p>
				))}
			</div>
		</div>
	);
};
