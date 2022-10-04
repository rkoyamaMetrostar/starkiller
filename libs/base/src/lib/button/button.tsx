import { ReactNode, SyntheticEvent } from 'react';
import classnames from 'classnames';

/* eslint-disable-next-line */
export interface ButtonProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The type of button to display
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * The type of button to display
   */
  variant?: ButtonVariant;
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * The contents of the button
   */
  children: ReactNode;
  /**
   * Event handler will be triggered when the button is clicked
   */
  onClick?: (param: SyntheticEvent) => void;
}

export enum ButtonVariant {
  Default = 'default',
  Secondary = 'secondary',
  AccentCool = 'accent-cool',
  AccentWarm = 'accent-warm',
  Base = 'base',
  Outline = 'outline',
  OutlineInverse = 'outline-inverse',
  Big = 'big',
  Unstyled = 'unstyled',
}

const noop = () => {
  return;
};

export function Button({
  id,
  type = 'button',
  variant = ButtonVariant.Default,
  className,
  children,
  onClick = noop,
  ...buttonProps
}: ButtonProps & JSX.IntrinsicElements['button']) {
  const classes = classnames(
    'usa-button',
    {
      'usa-button--secondary': variant === ButtonVariant.Secondary,
      'usa-button--accent-cool': variant === ButtonVariant.AccentCool,
      'usa-button--accent-warm': variant === ButtonVariant.AccentWarm,
      'usa-button--base': variant === ButtonVariant.Base,
      'usa-button--outline': variant === ButtonVariant.Outline,
      'usa-button--outline usa-button--inverse':
        variant === ButtonVariant.OutlineInverse,
      'usa-button--big': variant === ButtonVariant.Big,
      'usa-button--unstyled': variant === ButtonVariant.Unstyled,
    },
    className
  );

  return (
    <button
      id={id}
      type={type}
      className={classes}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;
