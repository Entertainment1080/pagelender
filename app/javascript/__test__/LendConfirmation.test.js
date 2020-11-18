import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LendConfirmation from '../components/Pages/LendConfirmation'


Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

it('LendConfirmation renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LendConfirmation />, div)
})

it('LendConfirmation renders content', () => {
    const lendedConfirmation = shallow(<LendConfirmation />)
    expect(lendedConfirmation.find("h4").text()).toEqual("Your book is on the market! We'll notify you if someone wants to borrow it.")
})