import { render } from '@testing-library/react';

import Home from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home />);
    const h1 = baseElement.querySelector('h1');

    expect(baseElement).toBeTruthy();
    expect(h1).toBeTruthy();
  });
});
