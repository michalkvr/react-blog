import React from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'small'; // | 'medium' | 'large';
  color?: 'primary' | 'textPrimary' | 'textDanger'; // | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
}

const Button = (props: ButtonProps) => {
  const {
    variant = 'small',
    color = 'primary',
    children,
    className,
    ...rest
  } = props;
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[color]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
