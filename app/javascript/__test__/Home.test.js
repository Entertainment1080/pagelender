import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../components/Pages/Home'


Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

it('Home renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home />, div)
})

it('Home renders content', () => {
    const home = shallow(<Home />)
    expect(home.find("[data-testid='home']").text()).toEqual("My Library")
})