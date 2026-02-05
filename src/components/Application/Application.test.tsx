import {screen, render, cleanup, waitFor, getByDisplayValue} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Application from './Application';
import { fetchData } from '../__mocks__/fetch';

describe('application component', () => { 
    it('should render correctly', async()=>{
        // userEvent.setup()
//         global.fetch = fetchData([{
//             name: {
//                 common: 'Afghanistan'
//             }
//         }])
//         render(<Application dispatch={() => {}}/>);
//         const appicationHeading = screen.getByText('Register')
//         expect(appicationHeading).toBeInTheDocument() ; 

//         const fnameElement = screen.getByPlaceholderText(/write your first name here/i)
//         expect(fnameElement).toBeInTheDocument();

//         const lnameElement = screen.getByRole('textbox', {name: 'Last Name'})
//         expect(lnameElement).toBeInTheDocument();
//         expect(lnameElement).toHaveAttribute('placeholder', 'Write your last name here')

//         const genderLabel = screen.getByText('Gender')
//         expect(genderLabel).toBeInTheDocument();

//         const maleRadio = screen.getByRole('radio', {name: 'Male'})
//         expect(maleRadio).toBeInTheDocument();
//         expect(maleRadio).toHaveAttribute('checked', "")

//         const femaleRadio = screen.getByRole('radio', {name: 'Female'})
//         expect(femaleRadio).toBeInTheDocument();

//         const otherRadio = screen.getByRole('radio', {name: 'Other'})
//         expect(otherRadio).toBeInTheDocument();

//         const CountryLabel = screen.getByText('Country')
//         expect(CountryLabel).toBeInTheDocument();

//         // const selectElement = screen.getByRole('combobox');
//         const selectElement = screen.getByDisplayValue(/under/i);
//         expect(selectElement).toHaveDisplayValue('Under Graduation');
//         const selectElement2 = screen.getByDisplayValue(/select/i)

//         await waitFor(()=>expect(selectElement2).toHaveDisplayValue('Afghanistan'))
        
//         await userEvent.selectOptions(selectElement, 'pg');
//         // await userEvent.selectOptions(selectElement, 'gd');

//         const pgElement = screen.getByRole('option', {
//             name:'Post Graduation'
//         })as HTMLOptionElement;
// // console.log(selectedElement[0]);
//         expect(pgElement.selected).toBeTruthy()

        
//         const optionElement = screen.getByText(/under/i) as HTMLOptionElement;
//         expect(optionElement.selected).toBeFalsy()
        
        
       
        
//         const submitButton = screen.getByRole('button', {name:'Submit'}) 
//         expect(submitButton).toBeInTheDocument();

//         const ResetButton = screen.getByRole('button', {name:'Reset'})
//         expect(ResetButton).toBeInTheDocument();
    })
 })