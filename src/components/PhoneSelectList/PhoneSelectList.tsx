import styles from './PhoneSelectList.module.scss';
import { useDispatch } from 'react-redux';
import { catalogActions } from '@/components/Comparison';
import { PhoneSelectItem } from './PhoneSelectItem/PhoneSelectItem';
import { Smartphone } from '@/types/entities';
import { useSearchPhone } from './hooks/useSearchPhone';
import { Popup } from '@/UI/Popup/Popup';
import { memo, useCallback } from 'react';

interface Props {
	smartphone: Smartphone;
	isOpen: boolean;
	onClose: () => void;
}

const MIN_SMARTPHONES_FOR_SEARCH = 3;

export const PhoneSelectList = memo(({ smartphone, isOpen, onClose }: Props) => {
	const { searchValue, setSearchValue, searchSmartphones, searchResultSmartphones } =
		useSearchPhone();

	const dispatch = useDispatch();
	const onChange = useCallback(
		(phone: Smartphone) => {
			onClose();
			dispatch(catalogActions.selectSmartphone({ from: smartphone, to: phone }));
		},
		[smartphone, onClose, dispatch],
	);

	return (
		<Popup isOpen={isOpen} onClose={onClose}>
			<div className={styles.phoneSelectList}>
				<div className={styles.phoneSelectList__container}>
					{searchSmartphones.length > MIN_SMARTPHONES_FOR_SEARCH ? (
						<input
							className={styles.phoneSelectList__input}
							type="search"
							placeholder="Поиск"
							value={searchValue}
							onChange={(event) => setSearchValue(event.target.value)}
						/>
					) : null}
					{searchResultSmartphones.map((phone) => (
						<PhoneSelectItem
							key={phone.id}
							phone={phone}
							onChange={() => onChange(phone)}
						/>
					))}
				</div>
			</div>
		</Popup>
	);
});
