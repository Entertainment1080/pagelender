import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../components/Components/Footer'


Enzyme.configure({ adapter: new Adapter() })

it('Footer renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer />, div)
})

it('Footer renders content', () => {
    const footer = shallow(<Footer />)
    expect(footer.find("p").text()).toEqual("PageLender © 2020")
})