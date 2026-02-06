
import styles from './GrowthStats.module.scss';

export const GrowthStats = () => {
    return (
       <div className={styles.main}>
           <section className={clsx("container", styles.container)}>
               <h2 className={styles.title}>Математика вашего роста</h2>

               <div className={styles.grid}>
                   <div className={clsx(styles.statCard)}>
                       <span className={styles.statLabel}>Стоимость 1 проверки</span>
                       <div className={styles.statValue}>2.5 ₽</div>
                       <span className={styles.statSub}>Против 10-20 ₽ у куратора</span>
                   </div>

                   <div className={clsx(styles.statCard)}>
                       <span className={styles.statLabel}>Скорость обратной связи</span>
                       <div className={styles.statValue}>1.5 сек</div>
                       <span className={styles.statSub}>Против 4-24 часов ожидания</span>
                   </div>

                   <div className={clsx(styles.statCard)}>
                       <span className={styles.statLabel}>Масштабируемость</span>
                       <div className={styles.statValue}>∞</div>
                       <span className={styles.statSub}>Ваши расходы не растут линейно</span>
                   </div>
               </div>

               <div className={clsx(styles.featureCard)}>
                   <div className={styles.iconWrapper}>
                       <svg
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           className={styles.icon}
                       >
                           <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                           <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                       </svg>
                   </div>

                   <div className={styles.contentWrapper}>
                       <div className={styles.badge}>АВТО-ОБНОВЛЕНИЕ</div>
                       <h3 className={styles.featureTitle}>
                           Больше не нужно переучивать кураторов
                       </h3>
                       <p className={styles.featureText}>
                           Как только меняются правила проверки или выходят уточнения от экспертов или составителей ЕГЭ, bioAI обновляется автоматически
                       </p>
                   </div>
               </div>
           </section>
       </div>
    );
};

export default GrowthStats;