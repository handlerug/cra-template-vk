import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders show persik button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/show me the persik/i);
  expect(buttonElement).toBeInTheDocument();
});
