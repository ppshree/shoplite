import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App Component', () => {
  test('renders heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /vite \+ react/i })
    ).toBeInTheDocument();
  });

  test('renders initial count', () => {
    render(<App />);
    expect(
      screen.getByRole('button', { name: /count is 0/i })
    ).toBeInTheDocument();
  });

  test('increments count when button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    await user.click(button);

    expect(
      screen.getByRole('button', { name: /count is 1/i })
    ).toBeInTheDocument();
  });

  test('increments multiple times', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(
      screen.getByRole('button', { name: /count is 3/i })
    ).toBeInTheDocument();
  });
});
