import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from "react-router-dom";
import { act } from 'react-dom/test-utils';

test('renders learn react link', () => {
  render(<MemoryRouter>
          <App />
        </MemoryRouter>);  
  // Interact with page
  act(() => {
    // Find the link (perhaps using the text content)
    const goHomeLink = document.querySelector('.navbar-brand');
    // Click it
    goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // Check correct page content showed up
  expect(document.body.textContent).toContain('Home');
});
