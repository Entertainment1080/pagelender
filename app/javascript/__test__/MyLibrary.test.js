import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyLibrary from '../components/Pages/MyLibrary'
import { format, parseISO } from 'date-fns'


Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

const rentedBooks = [{
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
},
{
    title: "Les Miserables",
    author: "Victor Hugo",
    description: "Victor Hugo's tale of injustice, heroism and love follows the fortunes of Jean Valjean, an escaped convict determined to put his criminal past behind him. But his attempts to become a respected member of the community are constantly put under threat: by his own conscience, when, owing to a case of mistaken identity, another man is arrested in his place; and by the relentless investigations of the dogged Inspector Javert. It is not simply for himself that Valjean must stay free, however, for he has sworn to protect the baby daughter of Fantine, driven to prostitution by poverty.",
    series: "",
    pages: 1463,
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1411852091l/24280.jpg",
    user_id: 1,
    rentals: [
        {
            book_id: 2,
            user_id: 2,
            pick_up_date: "2020-11-17T21:10:15.760Z",
            due_date: "2020-12-15T21:10:15.760Z",
        }
    ]
}]

const books = [
    {
        title: "Bleach Vol. 1",
        author: "Tite Kube",
        description: "Ichigo Kurosaki has always been able to see ghosts, but his ability doesn't change his life nearly as much as his close encounter with Rukia Kuchiki, a Soul Reaper and member of the mysterious Soul Society. While fighting a Hallow, an evil spirit that preys on humans who display psychic energy, Rukia attempts to lend Ichigo some of her powers so that he can save his family; but much to her suprise, Ichigo absorbs every last drop of her energy. Now a full-fledged Soul Reaper himself, Ichigo quickly learns that the world he inhabits is one full of dangerous spirits and, along with Rukia-who is slowly regaining her powers-it's Ichigo's job to protect the innocent from Hollows and help the spirits themselves find peace.",
        series: "Bleach",
        pages: 189,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388508611l/2880.jpg",
        user_id: 1,
        rentals: [
            {
                book_id: 3,
                user_id: 2,
                pick_up_date: "2020-11-13T21:10:15.760Z",
                due_date: "2020-12-10T21:10:15.760Z",
            }
        ]
    },
    {
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        description: "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, The Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit.",
        series: "Lord of the Rings",
        pages: 398,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298411339l/34.jpg",
        user_id: 1,
        rentals: [
            {
                book_id: 4,
                user_id: 2,
                pick_up_date: "2020-11-17T21:10:15.760Z",
                due_date: "2020-12-15T21:10:15.760Z",
            }
        ]
    }
]

const nonRentedBooks = [{
    title: "The Moon Is a Harsh Mistress",
    author: "Robert A. Heinlein",
    description: "It is a tale of revolution, of the rebellion of a former penal colony on the Moon against its masters on the Earth. It is a tale of a culture whose family structures are based on the presence of two men for every woman, leading to novel forms of marriage and family. It is the story of the disparate people, a computer technician, a vigorous young female agitator, and an elderly academic who become the movement's leaders, and of Mike, the supercomputer whose sentience is known only to the revolt's inner circle, who for reasons of his own is committed to the revolution's ultimate success.",
    series: "",
    pages: 288,
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348768309l/16690.jpg",
    user_id: 1,
},
{
    title: "The Fault in Our Stars",
    author: "John Green",
    description: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
    series: "",
    pages: 313,
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360206420l/11870085.jpg",
    user_id: 1,
}]

function parseDate(isoString) {
    let parsedIso = parseISO(isoString)
    return format(parsedIso, "MMM, do y h:m a")
}

it('MyLibrary renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MyLibrary rentedBooks={rentedBooks} books={books} nonRentedBooks={nonRentedBooks} parseDate={parseDate} />, div)
})

it('MyLibrary renders content', () => {
    const myLibrary = shallow(<MyLibrary rentedBooks={rentedBooks} books={books} nonRentedBooks={nonRentedBooks} parseDate={parseDate} />)
    expect(myLibrary.find("[data-testid='library']").text()).toEqual("Books You Borrowed:")
})