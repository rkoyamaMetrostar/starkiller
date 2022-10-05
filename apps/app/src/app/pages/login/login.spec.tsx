import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Login from './login';

describe('Login', () => {
  it('should render successfully', () => {
    const callback = () => {
      return;
    };
    const { baseElement } = render(
      <BrowserRouter>
        <Login loginCallback={callback} />
      </BrowserRouter>
    );
    const h1 = baseElement.querySelector('h1');

    expect(baseElement).toBeTruthy();
    expect(h1).toBeTruthy();
  });
});
