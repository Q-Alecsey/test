
import styles from './Cases.module.scss';

const casesData = [
    {
        title: 'Гимназия №15, Москва',
        description: 'Сократили время проверки экзаменационных работ на 65%. Учителя сфокусировались на индивидуальной работе с учениками.',
        result: 'Результат: -12 часов рутины в неделю',
    },
    {
        title: 'Лицей «Научный», Новосибирск',
        description: 'Повысили средний балл на 12% за счет мгновенной обратной связи — ученики исправляют ошибки сразу после решения.',
        result: 'Результат: +12% к среднему баллу',
    },
    {
        title: 'Курсы «БиоПрофи», ЕКБ',
        description: 'Полностью автоматизировали проверку домашних заданий для 1000+ учеников без найма новых кураторов.',
        result: 'Результат: Экономия 240к ₽/мес',
    },
];

const Cases = () => {
    return (
        <section className={clsx(styles.section)} id="cases">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Кейсы внедрения</h2>
                    <p className={styles.subtitle}>
                        Доказанная эффективность в крупнейших образовательных центрах
                    </p>
                </div>
                <div className={styles.grid}>
                    {casesData.map((item, index) => (
                        <article key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                            <div className={styles.cardFooter}>
                                <span className={styles.result}>{item.result}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cases;