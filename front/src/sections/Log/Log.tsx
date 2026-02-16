
import { useState } from 'react';
import styles from './Log.module.scss';

import RegisterTeacher from '@sections/RegisterTeacher/RegisterTeacher.tsx'
import RegisterStudent from "@sections/RegisterStudent/RegisterStudent.tsx";

import Login from '@sections/Login/Login.tsx';

const Log = () => {
    // Регистрация / Вход
    const [isLogin, setIsLogin] = useState(false);

    // Учитель / Ученик
    const [isTeacher, setIsTeacher] = useState(true);

    return (
        <div className={styles.formColumn}>
            <div className={styles.formCard}>
                <div className={styles.formHeader}>
                    <button
                        className={clsx(styles.authTab, !isLogin && styles.active)}
                        onClick={() => setIsLogin(false)}
                    >
                        Регистрация
                    </button>
                    <button
                        className={clsx(styles.authTab, isLogin && styles.active)}
                        onClick={() => setIsLogin(true)}
                    >
                        Вход
                    </button>
                    <div className={clsx(styles.tabGlider, isLogin && styles.tabGliderRight)} />
                </div>

                { !isLogin &&
                    <div className={styles.roleToggle}>
                        <div className={clsx(styles.roleGlider, !isTeacher && styles.roleGliderRight)} />

                        <button
                            className={clsx(styles.roleBtn, isTeacher && styles.activeRole)}
                            onClick={() => setIsTeacher(true)}
                        >
                            Для учителя
                        </button>
                        <button
                            className={clsx(styles.roleBtn, !isTeacher && styles.activeRole)}
                            onClick={() => setIsTeacher(false)}
                        >
                            Для ученика
                        </button>
                    </div>
                }

                { !isLogin && (isTeacher ? <RegisterTeacher /> : <RegisterStudent />) }
                { isLogin && <Login />}

            </div>
        </div>
    );
};

export default Log;
