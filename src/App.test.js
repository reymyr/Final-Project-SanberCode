import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// Test merender tulisan first react app
test('renders first React App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/first React App/i);
  expect(linkElement).toBeInTheDocument();
});

// Test React Router bekerja
test('App Router', () => {
  const { container, getByText } = render( <App /> )

  expect(container.innerHTML).toMatch(/First React App/i)

  fireEvent.click(getByText(/To-do List/i))

  expect(container.innerHTML).toMatch(/Tasks left/i)

  fireEvent.click(getByText(/Ask me/i))

  expect(container.innerHTML).toMatch(/question/i)
})