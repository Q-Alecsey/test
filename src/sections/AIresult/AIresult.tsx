
import styles from './AIresult.module.scss';

const AIresult = () => {
    return (
        <div className={styles.wrapper}>
            <div className={clsx(styles.container, "container")}>
              <div className={styles.header}>
                  <div className={styles.iconWrapper}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#4ADE80" />
                          <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                  </div>
                  <h2 className={styles.title}>Результат анализа ИИ</h2>
              </div>

              <p className={styles.subtitle}>Анализ ответа ученика:</p>

              <ul className={styles.list}>
                  <li className={styles.listItem}>
            <span className={clsx(styles.listIcon, styles.success)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
                      <span className={styles.listText}>
              <strong>Соответствие критериям ФИПИ:</strong> Ответ соответствует 2 из 3 критериев
            </span>
                  </li>
                  <li className={styles.listItem}>
            <span className={clsx(styles.listIcon, styles.success)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
                      <span className={styles.listText}>
              <strong>Правильность терминологии:</strong> Использованы корректные биологические термины
            </span>
                  </li>
                  <li className={styles.listItem}>
                      <span className={clsx(styles.listIcon, styles.warning)}>!</span>
                      <span className={styles.listText}>
              <strong>Неполное раскрытие:</strong> Пропущено важное звено в объяснении механизма
            </span>
                  </li>
                  <li className={styles.listItem}>
            <span className={clsx(styles.listIcon, styles.success)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
                      <span className={styles.listText}>
              <strong>Логичность изложения:</strong> Ответ структурирован и последователен
            </span>
                  </li>
              </ul>

              <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Рекомендации:</h3>
                  <ul className={styles.bulletList}>
                      <li>- Добавьте информацию о роли ферментов в процессе</li>
                      <li>- Уточните взаимосвязь между этапами процесса</li>
                  </ul>
              </div>

              <div className={styles.section}>
                  <span className={styles.gradeLabel}>Оценка: 2/3 балла</span>
              </div>

              <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Комментарий для ученика:</h3>
                  <p className={styles.commentText}>
                      "Хороший ответ! Вы правильно описали основные этапы процесса, но забыли упомянуть ключевую роль ферментов. Обратите внимание на этот аспект при подготовке к экзамену."
                  </p>
              </div>
          </div>
        </div>
    );
};

export default AIresult;