import {getByText, render,screen} from '@testing-library/react';
import Skills from './Skills';


describe('skills component', () => { 
    it('should render successfully', ()=>{
        const skills = ['code', 'eat', 'sleep','cody'];

        render(<Skills skills={skills}/>);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();

        const listItem = screen.getAllByRole('listitem');
        listItem.forEach(item => {
            expect(screen.getByText(`${item.textContent}`)).toBeInTheDocument();
        });
        expect(listItem).toHaveLength(4);

    })
 })