import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { user1 } from '../../types/__test_data__/user.fixture';

import Home from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Home currentUser={undefined} />
      </BrowserRouter>
    );
    const h1 = baseElement.querySelector('h1');

    expect(baseElement).toBeTruthy();
    expect(h1).toBeFalsy();
  });

  it('should render with user data', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Home currentUser={user1} />
      </BrowserRouter>
    );
    const h1 = baseElement.querySelector('h1');

    expect(baseElement).toBeTruthy();
    expect(h1).toBeTruthy();
  });
});
