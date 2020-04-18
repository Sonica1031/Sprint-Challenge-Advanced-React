import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Has Text From API call',() => {
  const {queryByText} = render(<App />);
 
  expect(queryByText(/Alex Morgan/i));
})


it('Goes to darkmode when clicked', ()=>{
  const {getByText} = render(<App />);
  const button = getByText(/Dark Mode/i)
  const buttonClick = jest.fn();
  button.addEventListener('click', buttonClick)
  fireEvent.click(button);
  expect(buttonClick).toHaveBeenCalled()
})