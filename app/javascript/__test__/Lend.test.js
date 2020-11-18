import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Lend from '../components/Pages/Lend'


Enzyme.configure({ adapter: new Adapter() })
// jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

const current_user = {
    id: 1,
    first_name: "Bilbo",
    last_name: "Baggins",
    email: "test@testing.com",
    password: "test123",
    password_confirmation: "test123",
    address: "123 Example St.",
    city: "San Diego",
    state: "CA",
    zip_code: "92129"
}

it('Lend renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Lend current_user={current_user} />, div)
})

it('Borrow renders content', () => {
    const lend = shallow(<Lend current_user={current_user} />)
    expect(lend.find("h2").text()).toEqual("Add a Book:")
})