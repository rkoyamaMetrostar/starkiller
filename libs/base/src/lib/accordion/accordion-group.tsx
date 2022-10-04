import classNames from 'classnames';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface AccordionGroupProps {
  /**
   * The unique identifier for this component
   */
  id: string;

  /**
   * Set to true if should allow multiple accordions to be expanded at once
   */
  allowMultiSelect?: boolean;
  /**
   * The contents of the alert
   */
  children: ReactNode;
}

export function AccordionGroup({
  id,
  allowMultiSelect = false,
  children,
}: AccordionGroupProps) {
  return (
    <div
      id={id}
      className={classNames('usa-accordion', {
        'usa-accordion--multiselectable': allowMultiSelect,
      })}
      data-allow-multiple={allowMultiSelect ? true : undefined}
    >
      {children}
    </div>
  );
}

export default AccordionGroup;
