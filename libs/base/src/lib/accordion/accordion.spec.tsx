import { render, screen } from '@testing-library/react';

import Accordion from './accordion';
import AccordionGroup from './accordion-group';

describe('Accordion', () => {
  it('should render a standard successfully', () => {
    const { baseElement } = render(
      <AccordionGroup id="accordion1">
        <Accordion id="a1" heading="Heading 1">
          Body
        </Accordion>
      </AccordionGroup>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render a standard expanded by default successfully', () => {
    const { baseElement } = render(
      <AccordionGroup id="accordion1">
        <Accordion id="a1" heading="Heading 1" expanded={true}>
          Body
        </Accordion>
      </AccordionGroup>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render a multi select accordion successfully', () => {
    const { baseElement } = render(
      <AccordionGroup id="accordion1" allowMultiSelect={true}>
        <Accordion id="a1" heading="Heading 1">
          Body
        </Accordion>
        <Accordion id="a2" heading="Heading 2">
          Body
        </Accordion>
      </AccordionGroup>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should expand an accordion', () => {
    const { baseElement } = render(
      <AccordionGroup id="accordion1">
        <Accordion id="a1" heading="Heading 1">
          Body
        </Accordion>
      </AccordionGroup>
    );

    const button = screen.getByText('Heading 1');
    button.click();

    const body = baseElement.querySelectorAll('#a1');
    expect(body[0].getAttribute('hidden')).toBeNull();
  });

  it('should collapse an accordion', () => {
    const { baseElement } = render(
      <AccordionGroup id="accordion1">
        <Accordion id="a1" heading="Heading 1" expanded={true}>
          Body
        </Accordion>
      </AccordionGroup>
    );
    const button = screen.getByText('Heading 1');
    button.click();

    const body = baseElement.querySelectorAll('#a1');
    expect(body[0].getAttribute('hidden')).toBe('');
  });
});
