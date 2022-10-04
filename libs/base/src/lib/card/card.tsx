import { ReactNode } from 'react';
import classnames from 'classnames';

/* eslint-disable-next-line */
export interface CardProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The heading for the card
   */
  heading?: string;
  /**
   * The footer for the card
   */
  footer?: ReactNode;
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * The body of the card
   */
  children: ReactNode;
}

export function Card({ id, heading, footer, className, children }: CardProps) {
  const classes = classnames('usa-card__container', className);

  return (
    <div id={id} className={classes}>
      {heading && (
        <header className="usa-card__header">
          <h2 className="usa-card__heading">{heading}</h2>
        </header>
      )}
      <div className="usa-card__body">{children}</div>
      {footer && <div className="usa-card__footer">{footer}</div>}
    </div>
  );
}

export default Card;
