import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BorrowedShow from '../components/Pages/BorrowedShow'


Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

it('BorrowedShow renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BorrowedShow />, div)
})

it('Borrow renders content', () => {
    const borrowedShow = shallow(<BorrowedShow />)
    expect(borrowedShow.find("Button").text()).toEqual("Back to your Library")
})