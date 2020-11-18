users = [
    {
        first_name: "Bilbo",
        last_name: "Baggins",
        email: "test@testing.com",
        password: "test123",
        password_confirmation: "test123",
        address: "123 Example St.",
        city: "San Diego",
        state: "CA",
        zip_code: "92129"
    },
    {
        first_name: "Homer",
        last_name: "Simpson",
        email: "test2@testing.com",
        password: "test321",
        password_confirmation: "test321",
        address: "500 Idk Blvd",
        city: "San Diego",
        state: "CA",
        zip_code: "92021"
    }
]

users.each do |attributes|
    User.create attributes
    puts "creating #{attributes}"
end

books = [
    {
        title: "Bleach Vol. 1",
        author: "Tite Kube",
        description: "Ichigo Kurosaki has always been able to see ghosts, but his ability doesn't change his life nearly as much as his close encounter with Rukia Kuchiki, a Soul Reaper and member of the mysterious Soul Society. While fighting a Hallow, an evil spirit that preys on humans who display psychic energy, Rukia attempts to lend Ichigo some of her powers so that he can save his family; but much to her suprise, Ichigo absorbs every last drop of her energy. Now a full-fledged Soul Reaper himself, Ichigo quickly learns that the world he inhabits is one full of dangerous spirits and, along with Rukia-who is slowly regaining her powers-it's Ichigo's job to protect the innocent from Hollows and help the spirits themselves find peace.",
        series: "Bleach",
        pages: 189,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388508611l/2880.jpg",
        user_id: User.first.id
    },
    {
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        description: "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, The Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit.",
        series: "Lord of the Rings",
        pages: 398,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298411339l/34.jpg",
        user_id: User.first.id
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.",
        series: "Harry Potter",
        pages: 309,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg",
        user_id: User.first.id,
    },
    {
        title: "Les Miserables",
        author: "Victor Hugo",
        description: "Victor Hugo's tale of injustice, heroism and love follows the fortunes of Jean Valjean, an escaped convict determined to put his criminal past behind him. But his attempts to become a respected member of the community are constantly put under threat: by his own conscience, when, owing to a case of mistaken identity, another man is arrested in his place; and by the relentless investigations of the dogged Inspector Javert. It is not simply for himself that Valjean must stay free, however, for he has sworn to protect the baby daughter of Fantine, driven to prostitution by poverty.",
        series: "",
        pages: 1463,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1411852091l/24280.jpg",
        user_id: User.first.id,
    },
    {
        title: "High School DXD, Vol. 1",
        author: "Ichiei Ishibumi",
        description: "When unpopular high schooler Issei Hyoudou has a less than romantic encounter with his first-ever girlfriend, the consequences are fatal! As he lies dying, who should come to his rescue but the prettiest girl in school, Rias Gremory! And the shocking truth she shares leaves Issei reeling... You've been reborn a devil. Now you work for me! Issei's uproarious life as a devil's minion begins here!",
        series: "High School DXD",
        pages: 160,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400839293l/18708755.jpg",
        user_id: User.first.id,
    },
    {
        title: "The Moon Is a Harsh Mistress",
        author: "Robert A. Heinlein",
        description: "It is a tale of revolution, of the rebellion of a former penal colony on the Moon against its masters on the Earth. It is a tale of a culture whose family structures are based on the presence of two men for every woman, leading to novel forms of marriage and family. It is the story of the disparate people, a computer technician, a vigorous young female agitator, and an elderly academic who become the movement's leaders, and of Mike, the supercomputer whose sentience is known only to the revolt's inner circle, who for reasons of his own is committed to the revolution's ultimate success.",
        series: "",
        pages: 288,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348768309l/16690.jpg",
        user_id: User.first.id,
    },
    {
        title: "The Fault in Our Stars",
        author: "John Green",
        description: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
        series: "",
        pages: 313,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360206420l/11870085.jpg",
        user_id: User.second.id,
    },
    {
        title: "The Handmaid's Tail",
        author: "Margaret Atwood",
        description: "Offred is a Handmaid in the Republic of Gilead. She may leave the home of the Commander and his wife once a day to walk to food markets whose signs are now pictures instead of words because women are no longer allowed to read. She must lie on her back once a month and pray that the Commander makes her pregnant, because in an age of declining births, Offred and the other Handmaids are valued only if their ovaries are viable. Offred can remember the years before, when she lived and made love with her husband, Luke; when she played with and protected her daughter; when she had a job, money of her own, and access to knowledge. But all of that is gone now . . .",
        series: "The Handmaid's Tail",
        pages: 314,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578028274l/38447._SY475_.jpg",
        user_id: User.second.id,
    },
    {
        title: "Fruits Basket, Vol. 1",
        author: "Natsuki Takaya",
        description: "A family with an ancient curse. And the girl who will change their lives forever. Tohru Honda was an orphan with no place to go until the mysterious Sohma family offered her a place to call home. Now her ordinary high school life is turned upside down as she's introduced to the Sohma's world of magical curses and family secrets.",
        series: "Fruits Basket",
        pages: 216,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442161482l/271199._SX318_.jpg",
        user_id: User.second.id,
    },
    {
        title: "Jurassic Park",
        author: "Michael Crichton",
        description: "An astonishing technique for recovering and cloning dinosaur DNA has been discovered. Now humankind’s most thrilling fantasies have come true. Creatures extinct for eons roam Jurassic Park with their awesome presence and profound mystery, and all the world can visit them—for a price.",
        series: "Jurrasic Park",
        pages: 466,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529604411l/40604658._SY475_.jpg",
        user_id: User.second.id,
    },
    {
        title: "Watchmen Vol. 1",
        author: "Alan Moore",
        description: "This Hugo Award-winning graphic novel chronicles the fall from grace of a group of super-heroes plagued by all-too-human failings. Along the way, the concept of the super-hero is dissected as the heroes are stalked by an unknown assassin.",
        series: "Watchmen",
        pages: 126,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442239711l/472331.jpg",
        user_id: User.second.id,
    },
    {
        title: "Furyborn",
        author: "Claire Legrand",
        description: "When assassins ambush her best friend, Rielle Dardenne risks everything to save him, exposing herself as one of a pair of prophesied queens: a queen of light, and a queen of blood. To prove she is the Sun Queen, Rielle must endure seven elemental magic trials. If she fails, she will be executed...unless the trials kill her first.",
        series: "Empirium",
        pages: 501,
        img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512678373l/34323570.jpg",
        user_id: User.second.id,
    }
]

books.each do |attributes|
   Book.create attributes
    puts "creating #{attributes}"
end


rentals = [
    {
        book_id: Book.first.id,
        user_id: User.second.id,
        pick_up_date: "2020-11-10T21:10:15.760Z",
        due_date: "2020-11-15T21:10:15.760Z",
    },
    {
        book_id: Book.find(7).id,
        user_id: User.first.id,
        pick_up_date: "2020-11-13T21:10:15.760Z",
        due_date: "2020-12-10T21:10:15.760Z",
    },
    {
        book_id: Book.find(8).id,
        user_id: User.first.id,
        pick_up_date: "2020-11-14T21:10:15.760Z",
        due_date: "2020-11-16T21:10:15.760Z",
    },
    {
        book_id: Book.find(10).id,
        user_id: User.first.id,
        pick_up_date: "2020-11-09T21:10:15.760Z",
        due_date: "2020-12-10T21:10:15.760Z",
    },
    {
        book_id: Book.find(4).id,
        user_id: User.second.id,
        pick_up_date: "2020-11-08T21:10:15.760Z",
        due_date: "2020-12-11T21:10:15.760Z",
    },
    {
        book_id: Book.find(6).id,
        user_id: User.second.id,
        pick_up_date: "2020-11-06T21:10:15.760Z",
        due_date: "2020-11-16T21:10:15.760Z",
    },
    {
        book_id: Book.find(11).id,
        user_id: User.first.id,
        pick_up_date: "2020-11-05T21:10:15.760Z",
        due_date: "2020-12-16T21:10:15.760Z",
    },
    {
        book_id: Book.find(9).id,
        user_id: User.first.id,
        pick_up_date: "2020-11-26T21:10:15.760Z",
        due_date: "2020-12-26T21:10:15.760Z",
    },
    {
        book_id: Book.find(12).id,
        user_id: User.first.id,
        pick_up_date: "2020-11-08T21:10:15.760Z",
        due_date: "2020-12-10T21:10:15.760Z",
    }
]

rentals.each do |attributes|
    rental_create = Rental.create attributes
    puts "creating #{attributes}"
    puts "valid?: #{rental_create.valid?}"
end