import { render } from '@testing-library/react';

import Login from './login';

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Login />);
    const h1 = baseElement.querySelector('h1');

    expect(baseElement).toBeTruthy();
    expect(h1).toBeTruthy();
  });
});
