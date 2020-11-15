import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../components/Pages/Home'
import library from '../../assets/images/libraryImg.png';
import borrow from '../../assets/images/borrowImg.png';
import lend from '../../assets/images/lendImg.png';

Enzyme.configure({ adapter: new Adapter() })

it('Home renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home />, div)
})

it('Home renders content', () => {
    const home = mount(<Home />)
    expect(home.find('h3').text()).toEqual('My Library')
})