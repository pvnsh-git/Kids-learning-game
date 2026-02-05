import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

export const renderWithWrapper = (component: any) => {
  return {
    ...render(
      <BrowserRouter>
        <Provider store={store}>
          {component}
        </Provider>
      </BrowserRouter>
    )
  }
}

test('renders GameList component initially ', () => {
  renderWithWrapper(<App />)

  const cardContainer = screen.getByTestId('cardContainer');
  expect(cardContainer).toBeInTheDocument()
});
