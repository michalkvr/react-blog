import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  variant?: 'small' | 'large';
}

const Input = (props: InputProps) => {
  const { label, id, name, variant = 'small', ...rest } = props;

  return (
    <div className={styles.input}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name || id}
        className={`${styles.field} ${styles[variant]}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
