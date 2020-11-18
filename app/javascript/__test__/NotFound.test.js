import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../components/Pages/NotFound'


Enzyme.configure({ adapter: new Adapter() })

it('NotFound renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NotFound />, div)
})

it('NotFound renders content', () => {
    const notFound = shallow(<NotFound />)
    expect(notFound.find("h1").text()).toEqual("Sorry for the inconvience, the page you were looking for could not be found.")
})





