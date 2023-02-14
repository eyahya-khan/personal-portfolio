import { render, screen } from '@testing-library/react';
import { Banner } from './components/Banner';

test('Check text and class name', () => {
  render(<Banner />);
  const linkElement = screen.getByText(/Portfolio: EYAHYA KHAN/i);
  const deleteButton = screen.getByTestId('home')
  
  expect(linkElement).toBeInTheDocument();
  expect(deleteButton).toHaveClass('banner')

});
