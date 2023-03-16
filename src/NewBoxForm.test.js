import { fireEvent, render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders without crashing', () => {
  render(<NewBoxForm/>);
});

test("match snapshot", function() {
  const {asFragment} = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
})


test("data add in form", function () {
    const { getByLabelText } = render(<NewBoxForm/>);
    const input = getByLabelText('Enter Color');
    fireEvent.change(input, {target : {value : "black"}});
    expect(input).toHaveValue('black');


})
