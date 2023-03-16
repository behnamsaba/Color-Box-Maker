import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test("match snapshot", function() {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})
