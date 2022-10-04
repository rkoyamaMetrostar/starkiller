/* eslint-disable-next-line */
import { ReactNode } from 'react';
import classnames from 'classnames';

/* eslint-disable-next-line */
export interface AlertProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The type of alert to display
   */
  type?: AlertType;
  /**
   * The heading for the alert
   */
  heading?: string;
  /**
   * A boolean indicating whether or not the alert should be slim
   */
  slim?: boolean;
  /**
   * A boolean indicating whether or not to show the applicable icon
   */
  noIcon?: boolean;
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * The contents of the alert
   */
  children: ReactNode;
}

export enum AlertType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export function Alert({
  id,
  type = AlertType.Info,
  heading,
  slim = false,
  noIcon = false,
  className,
  children,
}: AlertProps) {
  const classes = classnames(
    'usa-alert',
    {
      'usa-alert--success': type === AlertType.Success,
      'usa-alert--warning': type === AlertType.Warning,
      'usa-alert--error': type === AlertType.Error,
      'usa-alert--info': type === AlertType.Info,
      'usa-alert--slim': slim,
      'usa-alert--no-icon': noIcon,
    },
    className
  );

  return (
    <div id={id} className={classes}>
      <div className="usa-alert__body">
        {heading && <h4 className="usa-alert__heading">{heading}</h4>}
        <p className="usa-alert__text">{children}</p>
      </div>
    </div>
  );
}

export default Alert;
