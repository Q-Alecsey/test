
import styles from './Integration.module.scss';

import Log from "@sections/Log/Log.tsx";

const Integration = () => {
    return (
        <section className={styles.landingSection} id="integrations">
            <div className={clsx(styles.container, "container")}>
                <div className={styles.contentColumn}>
                    <h1 className={styles.title}>
                        Интеграция, которая не ломает процессы
                    </h1>

                    <ul className={styles.featuresList}>
                        <li className={styles.featureItem}>
                            <div className={styles.featureIcon}>1</div>
                            <div className={styles.featureText}>
                                <h3 className={styles.featureTitle}>Прямой API-контур</h3>
                                <p className={styles.featureDescription}>
                                    Передавайте ответ ученика и ключи ФИПИ — получайте JSON с полным разбором. Без изменения кода вашего сайта
                                </p>
                            </div>
                        </li>

                        <li className={styles.featureItem}>
                            <div className={styles.featureIcon}>2</div>
                            <div className={styles.featureText}>
                                <h3 className={styles.featureTitle}>Защита от галлюцинаций</h3>
                                <p className={styles.featureDescription}>
                                    Алгоритмическая проверка гарантирует, что ИИ не выдумает несуществующие правила биологии.
                                </p>
                            </div>
                        </li>

                        <li className={styles.featureItem}>
                            <div className={styles.featureIcon}>3</div>
                            <div className={styles.featureText}>
                                <h3 className={styles.featureTitle}>OCR-распознавание</h3>
                                <p className={styles.featureDescription}>
                                    Поддержка фото рукописных ответов (задания 27-28).
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={styles.logWrapper}>
                    <Log />
                </div>
            </div>
        </section>
    );
};

export default Integration;