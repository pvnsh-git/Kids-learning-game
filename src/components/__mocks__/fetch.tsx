
export const fetchData = (MockData: any) => jest.fn().mockImplementation(() =>
Promise.resolve({
    json: () =>
        Promise.resolve(MockData)
})
)

// export const fetch = {
//    get: jest.fn().mockResolvedValue([{name: {common: 'Afghanistan'}}])
// }