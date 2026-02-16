
import styles from './MainMenu.module.scss';

import {scrollToElement} from "@/utils/ts/scrollTo.ts";

const MainMenu = () => {
    return (
        <section className={styles.section}>
            <div className={clsx("container", styles.container)}>

                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Ваши кураторы <br />
                        тратят <span className={styles.highlight}>80% времени</span> на рутину
                    </h1>

                    <div className={styles.description}>
                        <span>Без раздувания штата: Снижаем операционные расходы онлайн-школ на 75%.</span>
                        Точность экспертного уровня (95%) с мгновенной обратной связью для ученика.
                    </div>

                    <div className={styles.actions}>
                        <a className={clsx(styles.btn, styles.btnPrimary)} data-link="taskChecker" onClick={scrollToElement}>
                            Проверить задание
                        </a>
                        <a className={clsx(styles.btn, styles.btnSecondary)} data-link="curators" onClick={scrollToElement}>
                            Внедрить ИИ-куратора
                        </a>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.badge}>AI Analysis Active</div>
                            <div className={styles.price}>₽ 2.50 / задание</div>
                        </div>

                        <span className={styles.subLabel}>Ответ ученика (Биология, Задание 27)</span>

                        <div className={styles.codeBlock}>
                            <p>
                                «...в профазе мейоза I происходит <span className={styles.highlightText}>конъюгации</span> и <span className={styles.highlightText}>кроссинговер</span>, что обеспечивает комбинативную изменчивость...»
                            </p>
                        </div>

                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <strong>95.4%</strong>
                                <span>Точность (vs Эксперт)</span>
                            </div>
                            <div className={styles.statItem}>
                                <strong>0.4 сек</strong>
                                <span>Скорость проверки</span>
                            </div>
                            <div className={styles.statItem}>
                                <strong>Объективно</strong>
                                <span>Без субъективности</span>
                            </div>
                            <div className={styles.statItem}>
                                <strong>24/7</strong>
                                <span>Доступность</span>
                            </div>
                        </div>

                        <div className={styles.cardFooter}>
                            <strong>Обучаемость:</strong> Система адаптирует алгоритмы под новые типы задач, методические рекомендации и комментарии составителей.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MainMenu;