import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Login from "./Login";

afterEach(cleanup);

describe('login testing', () => {
    it('should have username empty first', () => {
        render(<Login />);
        const username = screen.getByLabelText('Username');
        const password = screen.getByLabelText('Password');
        expect(username).toHaveValue('');
        expect(password).toHaveValue('');
    })
})