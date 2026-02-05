import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithMemoryRouter } from '../../__tests__/utils.test'
import SyllableList from './SyllableList'


describe('Syllables list', () => { 
    test('should count to 26, if route is "/albhabet"', async () => {
        userEvent.setup()
        renderWithMemoryRouter(<SyllableList />, '/alphabet')
        // console.log('pathname: ', window.location.pathname);
        const syllableList = screen.getByTestId('syllable-list')
        expect(syllableList).toBeInTheDocument()

        const alphabetSyllables = screen.getAllByTestId('single-syllable')
        expect(alphabetSyllables).toHaveLength(26);
        
        const firstSyllable = alphabetSyllables[0].getElementsByClassName('syllable');
        expect(firstSyllable[0]).toHaveClass('syllable');

        await userEvent.click(firstSyllable[0]);
        await waitFor(() => {
            expect(firstSyllable[0]).toHaveClass('onClick')
        })
        const audioElement = alphabetSyllables[0].getElementsByTagName('audio');
        expect(audioElement[0]).toHaveAttribute('src', 'a.mp3')
    })

    test('should count to 41, if route is "/number"', () => {
        renderWithMemoryRouter(<SyllableList />, '/number')

        console.log('pathname: ', window.location.pathname);
        const syllableList = screen.getByTestId('syllable-list')
        expect(syllableList).toBeInTheDocument()

        const alphabetSyllables = screen.getAllByTestId('single-syllable')
        expect(alphabetSyllables).toHaveLength(41);
    })
 })