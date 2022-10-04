import { ReactNode, useEffect, useRef, useState } from 'react';
import accordion from '@uswds/uswds/js/usa-accordion';
import classnames from 'classnames';

/* eslint-disable-next-line */
export interface AccordionProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The heading for the alert
   */
  heading: string;
  /**
   * Set to true to make expanded by default
   */
  expanded?: boolean;
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * The contents of the alert
   */
  children: ReactNode;
}

export function Accordion({
  id,
  heading,
  expanded = false,
  className,
  children,
}: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  // Ensure accordion JS is loaded
  const accordionRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const accordionElement = accordionRef.current;
    accordion.on(accordionElement);

    // Ensure cleanup after the effect
    return () => {
      accordion.off(accordionElement);
    };
  });

  const classes = classnames('usa-accordion__button', className);

  return (
    <>
      <h4 className="usa-accordion__heading">
        <button
          className={classes}
          aria-expanded={isExpanded}
          aria-controls={id}
          ref={accordionRef}
        >
          {heading}
        </button>
      </h4>
      <div
        id={id}
        className="usa-accordion__content usa-prose"
        hidden={!isExpanded}
      >
        <p>{children}</p>
      </div>
    </>
  );
}

export default Accordion;
