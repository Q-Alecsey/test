
import styles from './AIresult.module.scss';
import type { GradeResult } from '@/types/gradeResult';

interface AIresultProps {
  data: GradeResult;
}

const AIresult = ({ data }: AIresultProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.logo}>oi</span>
          <span className={styles.logoLabel}>ege-grader</span>
        </div>

        {/* Score */}
        <div className={styles.score}>
          Оценка: <strong>{data.task_score_0_to_3} / 3</strong>
        </div>

        <h2 className={styles.title}>Проверка ключей</h2>
        <p className={styles.subtitle}>
          Засчитано ключей (правильность ≥ 4): <strong>{data.n_credited_keys} / {data.n_keys}</strong>
        </p>

        {/* Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>№ ключа</th>
                <th>Статус</th>
                <th>Ключ</th>
                <th>Цитата ученика</th>
                <th>Объяснение эксперта</th>
              </tr>
            </thead>
            <tbody>
              {data.keys.map((key) => (
                <tr key={key.key_id}>
                  <td className={styles.tdCenter}>{key.key_id}</td>
                  <td className={styles.tdCenter}>
                    {key.key_is_credited
                      ? <span className={styles.credited}>засчитан</span>
                      : <span className={styles.notCredited}>не засчитан</span>
                    }
                  </td>
                  <td>{key.matched_variant || '—'}</td>
                  <td>{key.student_quote || '—'}</td>
                  <td>{key.expert_explanation || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bio errors */}
        <div className={styles.bioSection}>
          <h3 className={styles.bioTitle}>Биологические ошибки</h3>
          {data.keys.some(k => k.bio_error_in_key) || data.bio_error_outside_keys_present ? (
            <div className={styles.bioList}>
              {data.keys.filter(k => k.bio_error_in_key).map(k => (
                <p key={k.key_id} className={styles.bioItem}>
                  <strong>Ключ {k.key_id}:</strong> {k.bio_error_explanation}
                </p>
              ))}
              {data.bio_error_outside_keys_present && (
                <p className={styles.bioItem}>
                  <strong>Вне ключей:</strong> {data.bio_error_outside_keys_explanation}
                  {data.bio_error_outside_keys_evidence && (
                    <> — «{data.bio_error_outside_keys_evidence}»</>
                  )}
                </p>
              )}
            </div>
          ) : (
            <p className={styles.bioNone}>Биологических ошибок не найдено.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default AIresult;