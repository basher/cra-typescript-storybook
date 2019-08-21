import React from 'react';
import { IButtonProps as IProps } from './types';
import './styles/index.scss';

const TextButton: React.FC<IProps> = ({
  id,
  label,
  buttonType,
  onClick,
  disabled,
  className,
}: IProps): JSX.Element => (
  <button
    type="button"
    id={id}
    className={`TextButton
      ${buttonType ? ` TextButton-${buttonType}` : ''}
      ${className ? ` ${className}` : ''}`}
    onClick={(): void => onClick()}
    disabled={disabled}
  >
    {label}
  </button>
);

export default TextButton;
