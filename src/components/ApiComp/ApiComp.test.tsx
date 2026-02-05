import { render, screen, waitFor } from '@testing-library/react'
import { fetchData } from '../__mocks__/fetch'
import ApiComp from './ApiComp'

const MockUsers = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
]
describe('Users Api', () => {
    test('should render correctly', () => {
        render(<ApiComp />)
        const headingElement = screen.getByRole('heading', { level: 2 })

        expect(headingElement).toBeInTheDocument()
        expect(screen.getByRole('list')).toBeInTheDocument()
    })
    test('should render users', async() => {

        // global.fetch = jest.fn().mockImplementation(() =>
        //     Promise.resolve({
        //         json: () =>
        //             Promise.resolve(MockUsers)
        //     })
        // )

        global.fetch = fetchData(MockUsers)
        render(<ApiComp />);
        await waitFor(()=>
        screen.getByRole('listitem')
        )
        const listItemEle = screen.getByRole('listitem')
        const userEle = screen.getByText(/leanne graham/i)
        // const para = screen.getByRole('paragraph')
        // console.log('para: ',para);
        expect( listItemEle).toBeInTheDocument();
        expect( userEle).toBeInTheDocument();

        
       
    })
   

    

})
