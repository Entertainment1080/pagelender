import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BorrowedShow from '../components/Pages/BorrowedShow'
import { format, parseISO } from 'date-fns'


Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

const book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: " J.K. Rowling",
    description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.",
    series: "Harry Potter",
    pages: 309,
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg",
    user_id: 1,
    rentals: [
        {
            book_id: 1,
            user_id: 2,
            pick_up_date: "2020-11-13T21:10:15.760Z",
            due_date: "2020-12-10T21:10:15.760Z",
        }
    ]
}

const user = {
    first_name: "Bilbo",
    last_name: "Baggins",
    email: "test@testing.com"
}

function parseDate(isoString) {
    let parsedIso = parseISO(isoString)
    return format(parsedIso, "MMM, do y h:m a")
}

it('BorrowedShow renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BorrowedShow parseDate={parseDate} book={book} user={user} />, div)
})

it('BorrowedShow renders content', () => {
    const borrowedShow = shallow(<BorrowedShow parseDate={parseDate} book={book} user={user} />)
    expect(borrowedShow.find("h3").text()).toEqual("Harry Potter and the Sorcerer's Stone")
})