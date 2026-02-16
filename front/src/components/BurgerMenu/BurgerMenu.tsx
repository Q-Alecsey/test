
import { useState, type Dispatch, type SetStateAction } from 'react';
import styles from './BurgerMenu.module.scss';

interface DropDownProps {
    toggleDropDown: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu = ({toggleDropDown}: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false); // для анимации бургера

    const handlerClick = () => {
        setIsOpen(!isOpen);
        toggleDropDown(prev => !prev);
    }

    return (
        <button
            className={clsx(styles.burgerButton, isOpen && styles.active)}
            onClick={handlerClick}
            aria-label="Меню"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default BurgerMenu;