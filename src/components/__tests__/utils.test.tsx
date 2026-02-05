import { render } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"


export const renderWithRouter = (component: JSX.Element) => {
    return {
        ...render(<BrowserRouter>
            {component}
        </BrowserRouter>)
    }
}

export const renderWithMemoryRouter = (component: JSX.Element, route: string) => {
    return {
        ...render(<MemoryRouter initialEntries={[route]}>
            {component}
        </MemoryRouter>)
    }
}