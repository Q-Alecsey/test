
import styles from './InputForLog.module.scss';

import {type ComponentProps, useState} from "react";
import {type FieldError} from "react-hook-form";

interface InputProps extends ComponentProps<'input'> {
    labelText?: string;
    type: 'text' | 'email' | 'password' | 'tel';
    placeholder: string;
    error?: FieldError;
}

const InputForLog = ({labelText, type, placeholder, error, ...rest}: InputProps) => {

    const [isShowPassword, setShowPassword] = useState(false);

    return (
        <div className={styles.inputGroup}>
            {labelText && <label className={styles.label}>{labelText}</label>}
            <div className={styles.inputWrapper}>
                <input
                    {...rest}
                    type={type === 'password' ? (!isShowPassword ? 'password': 'text') : type}
                    className={clsx(styles.input, error && styles.errorInput)}
                    placeholder={placeholder}/>
                {
                    type === 'password' &&
                    <button type='button' className={styles.eye} onClick={() => setShowPassword(prev => !prev)}>
                        {!isShowPassword ? <Eye /> : <CrossedEye />}
                    </button>
                }
            </div>
            {error && <span className={styles.error}>{error.message}</span>}
        </div>
    );
};

export default InputForLog;

const Eye = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    )
}

const CrossedEye = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
            <line x1="3" y1="3" x2="21" y2="21"/>
        </svg>
    )
}