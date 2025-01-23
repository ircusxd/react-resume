import { render, screen } from '@testing-library/react';
import App from './App';
import data from "./data.json";

test('aplicar tema por defecto', () => {
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  });

  render(<App />);

  const htmlElement = document.documentElement;
  const appliedTheme = htmlElement.getAttribute('data-theme');

  expect(['light', 'dark']).toContain(appliedTheme);
});

test('renderiza toda la informacion', () => {
  render(<App />);

  expect(screen.getByText(data.info.name)).toBeInTheDocument();
  expect(screen.getByText(data.experience[0].company)).toBeInTheDocument();
  expect(screen.getByText(data.skills[0].name)).toBeInTheDocument();
  expect(screen.getByText(data.education[0].degree)).toBeInTheDocument();
});