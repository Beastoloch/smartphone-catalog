import styles from './Phone.module.scss';
import vectorIcon from '@/images/vector.svg';
import { memo, useState } from 'react';
import { Smartphone } from '@/types/entities';
import { PhoneSelectList } from '@/components/PhoneSelectList/PhoneSelectList';

interface Props {
	phone: Smartphone;
	isShowArrow: boolean;
	styles?: string;
}

export const Phone = memo((props: Props) => {
	const [popupIsOpen, setPopupOpenState] = useState(false);

	const handleOpenPopup = () => {
		setPopupOpenState(true);
	};

	const onClosePopup = () => {
		setPopupOpenState(false);
	};

	return (
		<div className={styles.phone}>
			<div className={styles.phone__container}>
				<img
					className={styles.phone__image}
					src={props.phone.image}
					alt={props.phone.name}
				/>
				{props.isShowArrow ? (
					<img
						className={styles.phone__button}
						src={vectorIcon}
						alt="vector"
						onClick={(event) => {
							handleOpenPopup();
							event.stopPropagation();
						}}
					/>
				) : null}
			</div>
			<p className={styles.phone__title}>{props.phone.name}</p>
			<PhoneSelectList smartphone={props.phone} isOpen={popupIsOpen} onClose={onClosePopup} />
		</div>
	);
});
