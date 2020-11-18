import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Borrow from '../components/Pages/Borrow'


Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

const books = [{
    title: "Harry Potter and the Sorcerer's Stone",
    author: " J.K. Rowling",
    description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.",
    series: "Harry Potter",
    pages: 309,
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg",
    user_id: 1
},
{
    title: "Les Miserables",
    author: "Victor Hugo",
    description: "Victor Hugo's tale of injustice, heroism and love follows the fortunes of Jean Valjean, an escaped convict determined to put his criminal past behind him. But his attempts to become a respected member of the community are constantly put under threat: by his own conscience, when, owing to a case of mistaken identity, another man is arrested in his place; and by the relentless investigations of the dogged Inspector Javert. It is not simply for himself that Valjean must stay free, however, for he has sworn to protect the baby daughter of Fantine, driven to prostitution by poverty.",
    series: "",
    pages: 1463,
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1411852091l/24280.jpg",
    user_id: 1
}]

it('Borrow renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Borrow books={books} />, div)
})

it('Borrow renders content', () => {
    const borrow = shallow(<Borrow books={books} />)
    expect(borrow.find("h2").text()).toEqual("Available Books:")
})