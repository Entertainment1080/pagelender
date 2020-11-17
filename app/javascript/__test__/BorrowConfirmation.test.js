import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BorrowConfirmation from '../components/Pages/BorrowConfirmation'


Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

it('BorrowConfirmation renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BorrowConfirmation />, div)
})

it('Home renders content', () => {
    const borrowConfirmation = shallow(<BorrowConfirmation />)
    expect(borrowConfirmation.find("h5").text()).toEqual("Thank you for borrowing a book. We'll notify the owner right away!")
})