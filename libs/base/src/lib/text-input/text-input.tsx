import classNames from 'classnames';
import { ChangeEventHandler } from 'react';

/* eslint-disable-next-line */
export interface TextInputProps {
  /**
   * The unique identifier for the input
   */
  id: string;
  /**
   * The name of the input
   */
  name: string;
  /**
   * The type of input, defaults to text
   */
  type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url';
  /**
   * Event handler for when value of input is changes
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function TextInput({
  id,
  name,
  type = 'text',
  className,
  onChange,
  ...inputProps
}: TextInputProps & JSX.IntrinsicElements['input']) {
  return (
    <input
      className={classNames('usa-input', className)}
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      {...inputProps}
    />
  );
}

export default TextInput;
