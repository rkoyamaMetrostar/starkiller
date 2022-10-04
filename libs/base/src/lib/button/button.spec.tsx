import { render, screen } from '@testing-library/react';

import Button, { ButtonVariant } from './button';

describe('Button', () => {
  let buttonClicked = false;
  const handleClick = () => {
    buttonClicked = true;
  };

  it('should render a standard button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" onClick={handleClick}>
        Button
      </Button>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render a submit button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" type="submit">
        Button
      </Button>
    );
    const button = baseElement.querySelector('.usa-button');
    expect(button).toBeTruthy();
  });
  it('should render a reset button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" type="reset">
        Button
      </Button>
    );
    const button = baseElement.querySelector('.usa-button');
    expect(button).toBeTruthy();
  });
  it('should render a primary button successfully', () => {
    const { baseElement } = render(<Button id="btn1">Button</Button>);
    const button = baseElement.querySelector('.usa-button');
    expect(button).toBeTruthy();
  });
  it('should render a secondary button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" variant={ButtonVariant.Secondary}>
        Button
      </Button>
    );
    const button = baseElement.querySelector('.usa-button--secondary');
    expect(button).toBeTruthy();
  });
  it('should render a accent-cool button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" variant={ButtonVariant.AccentCool}>
        Button
      </Button>
    );
    const button = baseElement.querySelector('.usa-button--accent-cool');
    expect(button).toBeTruthy();
  });
  it('should render a accent-warm button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" variant={ButtonVariant.AccentWarm}>
        Button
      </Button>
    );
    const button = baseElement.querySelector('.usa-button--accent-warm');
    expect(button).toBeTruthy();
  });
  it('should render a base button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" variant={ButtonVariant.Base}>
        Button
      </Button>
    );
    const button = baseElement.querySelector('.usa-button--base');
    expect(button).toBeTruthy();
  });
  it('should render a outline button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" variant={ButtonVariant.Outline}>
        Button
      </Button>
    );
    const button = baseElement.querySelector('.usa-button--outline');
    expect(button).toBeTruthy();
  });
  it('should render a outline-inverse button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" variant={ButtonVariant.OutlineInverse}>
        Button
      </Button>
    );
    const button = baseElement.querySelector('.usa-button--inverse');
    expect(button).toBeTruthy();
  });
  it('should render a big button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" variant={ButtonVariant.Big}>
        Button
      </Button>
    );
    const button = baseElement.querySelector('.usa-button--big');
    expect(button).toBeTruthy();
  });
  it('should render a unstyled button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" variant={ButtonVariant.Unstyled}>
        Button
      </Button>
    );
    const button = baseElement.querySelector('.usa-button--unstyled');
    expect(button).toBeTruthy();
  });
  it('should render a disabled button successfully', () => {
    const { baseElement } = render(
      <Button id="btn1" disabled={true}>
        Button
      </Button>
    );
    const button = baseElement.querySelector('.usa-button');
    expect(button?.getAttribute('disabled')).toEqual('');
  });
  it('should handle a button click', () => {
    const { baseElement } = render(
      <Button id="btn1" onClick={handleClick}>
        Button
      </Button>
    );
    const button = screen.getByText('Button');
    button.click();

    expect(buttonClicked).toBeTruthy();
  });
  it('should perform noop when onClick is not defined', () => {
    const { baseElement } = render(<Button id="btn1">Button</Button>);
    const button = screen.getByText('Button');
    button.click();

    expect(buttonClicked).toBeTruthy();
  });
});
