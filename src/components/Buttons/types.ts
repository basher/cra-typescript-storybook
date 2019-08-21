export type TButtonTypes =
  | 'primary'
  | 'secondary'
  | 'actionPositive'
  | 'actionNegative'
  | 'actionNeutral';

/**
 * Default button interface
 */
export interface IButtonProps {
  id: string;
  label: string;
  buttonType?: TButtonTypes;
  onClick: Function;
  disabled?: boolean;
  className?: string;
}
