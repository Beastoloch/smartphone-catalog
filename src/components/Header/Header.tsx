import styles from './Header.module.scss';
import profileIcon from '@/images/profile.svg';
import { Wrapper } from '@/UI/Wrapper/Wrapper';
import cls from 'classnames';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles.header__content}>
					<p className={styles.header__logo}>Каталог</p>
					<nav className={styles.header__nav}>
						<p className={cls(styles.header__navText, styles.header__navHover)}>
							СРАВНЕНИЕ
						</p>
						<div className={cls(styles.header__navProfile, styles.header__navHover)}>
							<p className={cls(styles.header__navText, styles.header__navTextSpacing)}>Личный кабинет</p>
							<img
								className={styles.header__navImg}
								src={profileIcon}
								alt="profile-logo"
							/>
						</div>
					</nav>
				</div>
			</Wrapper>
		</header>
	);
};
