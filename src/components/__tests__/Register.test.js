import {screen, render, cleanup, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from '../registration/Register';
import * as apiService from '../__mocks__/fetch'

afterEach(cleanup);

jest.mock('../__mocks__/fetch');

const countryResponse = [
    {
        name: {
            common: 'India'
        }
    },
]
describe('register', () => { 
    const genderOptions = ['male', 'female', 'other']
    it('should render register component with all input fields', async()=>{
        apiService.fetchData.mockResolvedValue(countryResponse);
        render(<Register/>);
        const formTitle = screen.getByText(/register/i);
        const fnameElement = screen.getByLabelText('First Name');
        const lnameElement = screen.getByLabelText('Last Name');
        const genderElements = screen.getAllByTestId('gender');
        const countrySelect = screen.getByTestId('country-select');
        expect(countrySelect).toHaveDisplayValue('-- Select a country --');

        expect(apiService.fetchData).toHaveBeenCalledTimes(1);
        await waitFor(() => {expect(screen.getByTestId('country-select')).toHaveDisplayValue('India')});
        expect(formTitle).toBeInTheDocument();
        expect(fnameElement).toHaveValue('');
        expect(lnameElement).toHaveValue('');
        expect(genderElements).toHaveLength(3);
        genderElements.forEach((element,index) => {
            if (element.value === 'male') {
                expect(element).toBeChecked();
            }else{
                expect(element).not.toBeChecked();
            }
            expect(element.value).toBe(genderOptions[index])
        });

    })
 })
