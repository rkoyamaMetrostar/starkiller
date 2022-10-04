import { render } from '@testing-library/react';

import Alert, { AlertType } from './alert';

describe('Alert', () => {
  it('should render a default alert', () => {
    const { baseElement } = render(
      <Alert id="alert1" heading="test">
        test alert
      </Alert>
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-alert')).toBeTruthy();
  });
  it('should render an info alert', () => {
    const { baseElement } = render(
      <Alert id="alert1" heading="test" type={AlertType.Info}>
        test alert
      </Alert>
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-alert--info')).toBeTruthy();
  });
  it('should render a warning alert', () => {
    const { baseElement } = render(
      <Alert id="alert2" heading="test" type={AlertType.Warning}>
        test alert
      </Alert>
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-alert--warning')).toBeTruthy();
  });
  it('should render a success alert', () => {
    const { baseElement } = render(
      <Alert id="alert3" heading="test" type={AlertType.Success}>
        test alert
      </Alert>
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-alert--success')).toBeTruthy();
  });
  it('should render an error alert', () => {
    const { baseElement } = render(
      <Alert id="alert4" heading="test" type={AlertType.Error}>
        test alert
      </Alert>
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-alert--error')).toBeTruthy();
  });
  it('should render a slim alert', () => {
    const { baseElement } = render(
      <Alert id="alert1" slim={true}>
        test alert
      </Alert>
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-alert--slim')).toBeTruthy();
  });
  it('should render an alert with no icon', () => {
    const { baseElement } = render(
      <Alert id="alert1" noIcon={true}>
        test alert
      </Alert>
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-alert--no-icon')).toBeTruthy();
  });
});