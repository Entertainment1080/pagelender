import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Lend from '../components/Pages/Lend'


Enzyme.configure({ adapter: new Adapter() })
// jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

it('Lend renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Lend />, div)
})

it('Borrow renders content', () => {
    const lend = shallow(<Lend />)
    expect(lend.find("h3").text()).toEqual("Add a Book")
})