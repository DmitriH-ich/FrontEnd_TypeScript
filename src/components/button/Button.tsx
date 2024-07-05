import { FormEvent } from 'react';
import styles from './button.module.css'

//добавили interface props
// которые просил добавить ts для безопасности

interface IButtonProps {
  isGetButton?: boolean;
  buttonText?: string;
  // типизируем props с функцией без return
  onButtonClick?: () => void;
  buttonType?: 'button' | 'submit' | 'reset';
  onSubmit?: (e: any) => void;
}

function Button({ buttonText = 'push', isGetButton = true, onButtonClick, onSubmit, buttonType = 'button' }: IButtonProps) {
  return ( 
    <button
    type = {buttonType}
    onSubmit={onSubmit}
    onClick={onButtonClick}
    className={`${styles.button} ${isGetButton ? styles.buttonDanger : styles.buttonPrimary}`}
    >
      {buttonText}
    </button>
  );
}

export default Button;

