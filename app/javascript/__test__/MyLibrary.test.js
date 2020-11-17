import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyLibrary from '../components/Pages/MyLibrary'


Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

it('MyLibrary renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MyLibrary />, div)
})

it('MyLibrary renders content', () => {
    const myLibrary = shallow(<MyLibrary />)
    expect(myLibrary.find("[data-testid='library']").text()).toEqual("Books You Borrowed:")
})