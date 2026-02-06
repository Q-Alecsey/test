
import styles from './DropDown.module.scss';

import React, {type Dispatch, type SetStateAction} from 'react'

import {useScrollLock} from "@CustomHooks/UseScrollLock.ts";
import {scrollToElement} from "@/utils/ts/scrollTo.ts";

interface DropDownProps {
    isOpenDropDown: boolean;
    toggleDropDown: Dispatch<SetStateAction<boolean>>;
}

export const DropDown = ({isOpenDropDown, toggleDropDown} : DropDownProps) => {

    useScrollLock(isOpenDropDown);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {

        toggleDropDown(false);
        scrollToElement(e);
    }

    return (
        <div className={clsx(styles.DropDown, isOpenDropDown && styles.active)}>
            <div className={styles.DropDownInner}>
                <nav className={styles.nav}>
                    <a data-link="curators" onClick={handleClick} className={styles.link}>Для онлайн-школ</a>
                    <a data-link="cases" onClick={handleClick} className={styles.link}>Кейсы внедрения</a>
                    <a data-link="integrations" onClick={handleClick} className={styles.link}>Для учителей</a>
                </nav>

                <div className={styles.line}></div>

                <div className={styles.actions} data-link="curators" onClick={handleClick}>
                    <a type="button" className={styles.button}>
                        Записаться на пилот
                    </a>
                </div>

            </div>
        </div>
    );
};

export default DropDown;