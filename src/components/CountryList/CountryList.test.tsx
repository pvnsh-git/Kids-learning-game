import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store'
import CountryList from '.';


describe('country list', () => {
    test('have all headers', () => {
        let headerContents = [/First name/i, /last/i, /education/i, /residen/i, /authorized/i ];
        render(
            <Provider store={store}>
                <CountryList />
            </Provider>
        )
        const headers = screen.getByRole('table');
        expect(headers).toBeInTheDocument();

        const headerElements = screen.getAllByRole('columnheader');
        headerElements.forEach((item, index) => {
            expect(item).toHaveTextContent(headerContents[index]);
        })

    })
})