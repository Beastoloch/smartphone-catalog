import styles from './Catalog.module.scss';
import { catalogActions, catalogSelectors } from './logic/slice';
import { useDispatch, useSelector } from 'react-redux';

export const CatalogShowDifference = () => {
	const dispatch = useDispatch();
	const isShowDifferences = useSelector(catalogSelectors.isShowDifferences);

	return (
		<div className={styles.comparison__input}>
			<input
				checked={isShowDifferences}
				type="checkbox"
				className={styles.comparison__inputCheckbox}
				onChange={(event) =>
					dispatch(catalogActions.setShowDifferences(event.target.checked))
				}
			/>
			<label className={styles.comparison__inputLabel}>Показать различия</label>
		</div>
	);
};
