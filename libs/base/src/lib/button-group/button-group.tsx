import classNames from 'classnames';
import { ReactNode, Children } from 'react';

/* eslint-disable-next-line */
export interface ButtonGroupProps {
  /**
   * The unique identifier for this component
   */
  id?: string;
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * The contents of the label
   */
  children: ReactNode;
}

export function ButtonGroup({
  id = undefined,
  className,
  children,
}: ButtonGroupProps) {
  return (
    <ul id={id} className={classNames('usa-button-group', className)}>
      {Children.map(children, (child: ReactNode, index) => {
        return (
          <li key={index} className="usa-button-group__item">
            {child}
          </li>
        );
      })}
    </ul>
  );
}

export default ButtonGroup;
