import {App} from "../lib/App";

beforeAll(()=> {
    const app = new App()
    app.start()
})

it('Is a test', () => {
    expect(1+1).toBe(2)
})
