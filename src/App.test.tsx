import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import App from './App';
import { Store } from './Redux/store';
import { Provider } from 'react-redux'
// beforeEach(()=>{
//   jest.resetAllMocks(),
//   jest.useFakeTimers()
// })
// afterEach(() => {
//   jest.restoreAllMocks()
//   jest.useRealTimers()
// })

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('test timers',()=>{
//   render( <Provider store={Store}>
//      <App />
//   </Provider>)
//   const value = screen.getByText(/kalpana/i)
//   expect(value).toBeInTheDocument();
//   act(() => {
//     jest.runAllTimers();
//   });
//   const value2 = screen.getByText(/Ravipati/i);
//   expect(value2).toBeInTheDocument();
  
// })
