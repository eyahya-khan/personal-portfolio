import { render, screen } from '@testing-library/react';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';

test('Check text and class name in Banner component', () => {
  //Arrange
  render(<Banner />); 
  //Act
  const text = screen.getByText(/Portfolio: EYAHYA KHAN/i);
  const bannerSection = screen.getByTestId('home')
  //Assert
  expect(text).toBeInTheDocument();
  expect(bannerSection).toHaveClass('banner')
});


test('Check class name in Skill component', () => {
  render(<Skills />);
  const skillText = screen.getByTestId('skill')
  const skillBox = screen.getByTestId('skill-box')
  expect(skillText).toHaveClass('skill')
  expect(skillBox).toHaveClass('skill-bx')
  expect(skillText).toContainElement(screen.getByTestId('skl-txt'))
});