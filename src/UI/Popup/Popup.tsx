import { useEffect, useRef, ReactNode, memo } from 'react';
import styles from './Popup.module.scss';
import cls from 'classnames';

interface Props {
	isOpen: boolean;
	children: ReactNode;
	styles?: string;
	onClose: () => void;
}

export const Popup = memo((props: Props) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!props.isOpen) {
			return;
		}

		const onClose = ({ target }: MouseEvent) => {
			if (!containerRef.current?.contains(target as Element)) {
				props.onClose();
				return;
			}
		};

		window.addEventListener('click', onClose);
		return () => window.removeEventListener('click', onClose);
	}, [props.isOpen]);

	if (!props.isOpen) {
		return null;
	}

	return (
		<div className={cls(styles.popup, styles)} ref={containerRef}>
			{props.children}
		</div>
	);
});
