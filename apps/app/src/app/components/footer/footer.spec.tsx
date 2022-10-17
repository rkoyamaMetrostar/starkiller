import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './footer';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });
});
