import { ReactNode, useLayoutEffect, useRef } from 'react';
import modal from '@uswds/uswds/js/usa-modal';
import classnames from 'classnames';

/* eslint-disable-next-line */
export interface ModalProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The type of modal to display
   */
  size?: ModalSize;
  /**
   * The heading for the alert
   */
  heading: string;
  /**
   * The footer for the alert
   */
  footer?: ReactNode;
  /**
   * The contents of the alert
   */
  children: ReactNode;
}

export enum ModalSize {
  Small = 'small',
  Large = 'large',
}

export function Modal({
  id,
  heading,
  size = ModalSize.Small,
  footer,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const modalElement = modalRef.current;
    modal.on(modalElement);
    return () => modal.off(modalElement);
  });

  const classes = classnames('usa-modal', {
    'usa-modal--lg': size === ModalSize.Large,
  });

  return (
    <div
      ref={modalRef}
      className={classes}
      id={id}
      aria-labelledby={`${id}-heading`}
      aria-describedby={`${id}-description`}
    >
      <div className="usa-modal__content">
        <div className="usa-modal__main">
          <h2 className="usa-modal__heading" id={`${id}-heading`}>
            {heading}
          </h2>
          <div className="usa-prose">
            <p id={`${id}-description`}>{children}</p>
          </div>
          <div className="usa-modal__footer">{footer}</div>
        </div>
        <button
          className="usa-button usa-modal__close"
          aria-label="Close this window"
          data-close-modal
        >
          <svg
            className="usa-icon"
            aria-hidden="true"
            focusable="false"
            role="img"
          >
            <use xlinkHref={`assets/uswds/img/sprite.svg#close`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Modal;
