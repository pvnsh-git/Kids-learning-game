import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './Counter';

describe('counter', () => {
    test('renders correctly', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button', { name: /increment/i })
        expect(buttonElement).toBeInTheDocument();

        const divElement = screen.queryByText(/In publishing/i, {exact: false})
        expect(divElement).not.toBeInTheDocument()
    })

    test('renders a count of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent("0")
    })

    test('renders a count of 1 after clicking the Increment button', async() => {
        user.setup()
        render(<Counter />)
        const buttonElement = screen.getByRole('button', {name: /increment/i})
        await user.click(buttonElement)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent("1")
    })

    test('render a count of 2 after clicking the Increment button twice', async() => {
        user.setup()
        render(<Counter />)
        const IncrementButton = screen.getByRole('button', {name: /Increment/i})
        await user.dblClick(IncrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent("2")
    })
   
})
fdescribe('counter with prevCount', () => { 
    it('renders correctly',async()=>{
        user.setup();
        render(<Counter/>);

        const countEle = screen.getByText(/curr: 0, prev:/i)
        expect(countEle).toBeInTheDocument();
    })
 })