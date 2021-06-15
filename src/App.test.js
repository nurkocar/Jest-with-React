import { render, screen, fireEvent, buildQueries } from '@testing-library/react';
import App from './App';

test('button has correct initial color and turns gray when disabled', () => {
  render(<App />);

  //find an element with a role of button and text of 'Change to blue' and a checkbox with a name of 'Disable Button'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  //click button
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  //expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to red');

  //click the checkbox
  fireEvent.click(checkbox);

  //expect checkbox is checked and button color turns gray
  expect(checkbox).toBeChecked;
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);

  //check the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled;

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  expect(checkbox).not.toBeChecked;

  //click the checkbox
  fireEvent.click(checkbox);

  //check that the checkbox is checked after clicked
  expect(checkbox).toBeChecked;
  expect(colorButton).toBeDisabled;

  //click the checkbox for a second time
  fireEvent.click(checkbox);

  //check that the checkbox is checked after clicked
  expect(checkbox).not.toBeChecked;
  expect(colorButton).toBeEnabled;


});



