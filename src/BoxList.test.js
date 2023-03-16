import { fireEvent, queryByAttribute, render } from '@testing-library/react';
import BoxList from './BoxList';

test('renders without crashing', () => {
  render(<BoxList />);
});

test("match snapshot", function() {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
})


describe("add item from form", function() {
    test("page is empty at first", function() {
        const {queryByAttribute,queryByText,getByLabelText} = render(<BoxList />);
        expect(queryByText('X')).not.toBeInTheDocument();
    })
    test("add items work", function() {
        const {queryByRole,queryByText,getByLabelText} = render(<BoxList />);
        const input = getByLabelText('Enter Color');
        const btn = queryByText('Add');
        fireEvent.change(input, {target : {value : "black"}});
        fireEvent.click(btn);
        expect(queryByText("X")).toBeInTheDocument();

    })
})

test('form get empty after sumit', function() {
    const { getByLabelText,queryByText } = render(<BoxList/>);
    const input = getByLabelText('Enter Color');
    const btn = queryByText('Add');
    fireEvent.change(input, {target : {value : "black"}});
    fireEvent.click(btn);
    expect(input).not.toHaveValue();


})