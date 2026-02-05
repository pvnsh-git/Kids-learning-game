import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameList from '.';
import { renderWithRouter } from '../../__tests__/utils.test';



describe('GameList', () => {
    test('renders correctly', () => {
        renderWithRouter(<GameList />)

        const cardContainer = screen.getByTestId('cardContainer')
        expect(cardContainer).toBeInTheDocument();

        const card = screen.getAllByTestId('card')
        expect(card).toHaveLength(6);
    })

    describe('Cards in GameList', () => {
        test('first card renders correctly', () => {
            renderWithRouter(<GameList />)
            const card = screen.getAllByTestId('card')
            const firstCard = card[0].getElementsByTagName('div');
            expect(firstCard).toHaveLength(9);
            expect(firstCard[0]).toHaveClass('header');
            expect(firstCard[0]).toHaveTextContent('Alphabet');
            const imageElement = firstCard[1].getElementsByTagName('img');
            expect(imageElement).toHaveLength(1)
            expect(imageElement[0]).toHaveAttribute('alt', 'Alphabet')
            expect(firstCard[2]).toHaveClass('body')
            const linkElement = screen.getByRole('link', {name: 'Alphabet'})
            expect(linkElement).toHaveAttribute('href', '/details/alphabet')
        })

        test('Second card renders correctly', () => {
            renderWithRouter(<GameList />)
            const card = screen.getAllByTestId('card')
            const SecondCard = card[1].getElementsByTagName('div');
            expect(SecondCard).toHaveLength(9);
            expect(SecondCard[0]).toHaveClass('header');
            expect(SecondCard[0]).toHaveTextContent('Number');
            const NumsImageElement = SecondCard[1].getElementsByTagName('img');
            expect(NumsImageElement).toHaveLength(1)
            expect(NumsImageElement[0]).toHaveAttribute('alt', 'Number')
            expect(SecondCard[2]).toHaveClass('body')
            const numsLinkElement = screen.getByRole('link', {name: 'Number'})
            expect(numsLinkElement).toHaveAttribute('href', '/details/number')
        })
    })

    describe('On click', () => { 
        test('of the Alphabet link in the first card, should change the route to "/alphabet"', async () => {
            userEvent.setup()
            renderWithRouter(<GameList />)
            const linkElement = screen.getByRole('link', {name: 'Alphabet'})
            console.log('link content', linkElement.textContent);
            await userEvent.click(linkElement)
            await waitFor(()=>{
                expect(window.location.pathname).toBe('/details/alphabet')
             })
        })

        test('of the Number link in the second card, should change the route to "/number"', async () => {
            userEvent.setup()
            renderWithRouter(<GameList />)
            const linkElement = screen.getByRole('link', {name: 'Number'})
            console.log('link content', linkElement.textContent);
            await userEvent.click(linkElement)
            await waitFor(()=>{
                expect(window.location.pathname).toBe('/details/number')
             })
        })
     })
})