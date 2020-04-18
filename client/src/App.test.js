import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Has text from API call',() => {
  const {queryByText} = render(<App />);
 
  expect(queryByText(/Alex Morgan/i));
})


test('Darkmode toggles when clicked', ()=>{
  const {queryByText} = render(<App />);
  const body = document.querySelector('body');
  const button = queryByText(/Dark Mode/i)
  fireEvent.click(button);
  expect(body.classList.value).toEqual('');
})
