import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { useLocation } from 'react-router-dom'
import Header from '../components/Components/Header'


Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

it('Header renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
})

it('Header renders content', () => {
    const header = shallow(<Header />)
    expect(header.find("h1").text()).toEqual("Pagelender")
})