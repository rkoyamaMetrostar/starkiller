import { render } from '@testing-library/react';
import Button from '../button/button';

import Card from './card';

describe('Card', () => {
  it('should render a basic card successfully', () => {
    const { baseElement } = render(<Card id="card1">Body</Card>);

    const bodyElement = baseElement.querySelectorAll('.usa-card__body');
    expect(bodyElement).toBeTruthy();
  });
  it('should render a card with heading successfully', () => {
    const { baseElement } = render(
      <Card id="card2" heading="Heading">
        Body
      </Card>
    );

    const headingElement = baseElement.querySelectorAll('.usa-card__header');
    expect(headingElement).toBeTruthy();
  });
  it('should render a card with footer successfully', () => {
    const footer = (
      <Button
        id="btn1"
        onClick={() => {
          return;
        }}
      >
        Visit Florida Keys
      </Button>
    );

    const { baseElement } = render(
      <Card id="card3" footer={footer}>
        Body
      </Card>
    );

    const footerElement = baseElement.querySelectorAll('.usa-card__footer');
    expect(footerElement).toBeTruthy();
  });
});
