
import styles from './Header.module.scss';

import BurgerMenu from "@components/BurgerMenu/BurgerMenu.tsx"
import DropDown from "@components/DropDown/DropDown.tsx"

import {scrollToElement} from '@/utils/ts/scrollTo.ts'

import {useState } from 'react';

export const Header = ( ) => {

    const [isOpenDropDown , setIsOpenDropDown] = useState(false);

    return (
        <header className={clsx(styles.header)}>
            <div className={clsx(styles.headerInner, "container")}>
                <div className={styles.logo}>
                    <div className={styles.iconWrapper}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="10" stroke="#107e3e" strokeWidth="2" />
                            <path
                                d="M8 12L11 15L16 9"
                                stroke="#107e3e"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <span className={styles.brandName}>bioAI</span>
                </div>

                <nav className={styles.nav}>
                    <a data-link="curators" onClick={scrollToElement} className={styles.link}>Для онлайн-школ</a> {/*для онлайн школ*/}
                    <a data-link="cases" onClick={scrollToElement} className={styles.link}>Кейсы внедрения</a>
                    <a data-link="integrations" onClick={scrollToElement} className={styles.link}>Для учителей</a>
                </nav>

                <div className={styles.actions}>
                    <a type="button" className={styles.button} data-link="curators" onClick={scrollToElement}>
                        Записаться на пилот
                    </a>
                </div>

                <BurgerMenu toggleDropDown={setIsOpenDropDown} />

                <DropDown isOpenDropDown={isOpenDropDown} toggleDropDown={setIsOpenDropDown}/>
            </div>
        </header>
    );
};

export default Header;