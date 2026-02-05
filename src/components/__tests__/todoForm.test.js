import { cleanup, findAllByLabelText, fireEvent, getAllByTestId, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from '../../App.test';
import TodoForm from '../todo/TodoForm'

afterEach(cleanup);

const setupTodoComponent = () => {
    renderWithRedux(<TodoForm />);
}

describe('todoForm component test', () => { 

    it('should render todo component', () => {
        setupTodoComponent();
        // const input = screen.getByTestId('form-input');
        // expect(input).toHaveTextContent('');
    })
    
//     it('should add todo in the table', () => {
//         setupTodoComponent();
//         const addTodoBtn = screen.getByTestId('add-button');
//         const input = screen.getByTestId('form-input');
    
//         fireEvent.change(input, {target:{value:'pavan'}});
//         fireEvent.click(addTodoBtn);
//         expect(input.value).toBe('');
//         const task = screen.getByTestId('todo-task');
//         expect(task).toHaveTextContent('pavan');
//         fireEvent.change(input, {target:{value:'dhruv'}});
//         fireEvent.click(addTodoBtn);
//         expect(input.value).toBe('');
//         const task2 = screen.queryAllByTestId('todo-task');
//         expect(task2).toHaveLength(2);
//         const todos = task2.map(e => e.textContent);
//         expect(todos).toEqual(['pavan', 'dhruv']);
//     })
    
//     it('should delete todo from the table', async() => {
//         setupTodoComponent();
//         const tasks = screen.queryAllByTestId('todo-task');
//         expect(tasks).toHaveLength(2);
//         const deleteTaskBtn = screen.queryAllByTestId('delete-task');
//         fireEvent.click(deleteTaskBtn[1]);
//         const task2 = screen.queryAllByTestId('todo-task');
//         expect(task2).toHaveLength(1);
//         expect(task2[0].textContent).toBe('pavan');
//     }) 
 })

