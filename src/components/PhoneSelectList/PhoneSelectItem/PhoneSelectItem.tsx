import styles from './PhoneSelectItem.module.scss';
import changeIcon from '@/images/change.svg';
import { Smartphone } from '@/types/entities';

interface Props {
	phone: Smartphone;
	onChange: () => void;
}

export const PhoneSelectItem = (props: Props) => {
	return (
		<div className={styles.phoneSelectItem}>
			<img
				className={styles.phoneSelectItem__button}
				onClick={props.onChange}
				src={changeIcon}
				alt={props.phone.name}
			/>
			<img
				className={styles.phoneSelectItem__image}
				src={props.phone.image}
				alt={props.phone.name}
			/>
			<p className={styles.phoneSelectItem__title}>{props.phone.name}</p>
		</div>
	);
};
