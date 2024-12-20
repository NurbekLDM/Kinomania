const films = [
    { title: 'Avengers: Endgame',
        img: "https://i.pinimg.com/474x/91/e8/b2/91e8b28b4cb04f5bd07d7fcd3bf08e16.jpg",
        genre: 'Fiction, Fantasy, Action',
        grade: 8.4,
        year: 2019,
        description: 'After the devastating events of Avengers: Infinity War, the Avengers must find a way to reverse the damage done by Thanos.',
        director: 'Anthony Russo, Joe Russo',
        releaseDate: 'April 26, 2019',
        countries: ['USA'],
        budget: '$356 million',
        gross: '$2.798 billion',
        avatar: 'https://i.pinimg.com/474x/2d/d3/b0/2dd3b04d8d777d54b1f1c905f09f1201.jpg',
        writers: ['Christopher Markus', 'Stephen McFeely']},
    { title: 'Inception', img: "https://i.pinimg.com/474x/43/9a/1c/439a1c4583a953c26b63d08a1d832f53.jpg", genre: 'Sci-Fi, Thriller', grade: 8.8, year: 2010,description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the task of planting an idea into the mind of a CEO.',
        director: 'Christopher Nolan',
        releaseDate: 'July 16, 2010',
        countries: ['USA', 'UK'],
        budget: '$160 million',
        gross: '$836.8 million',
        writers: ['Christopher Nolan'],
        avatar: 'https://i.pinimg.com/474x/db/6f/e3/db6fe3fd181624243d7fc4f69d2b5d43.jpg'
    },
    { title: 'The Dark Knight', img: "https://i.pinimg.com/474x/5f/fe/79/5ffe79003530da912a82acac80be1426.jpg", genre: 'Action, Crime, Drama', grade: 9.0, year: 2008,description: 'Batman sets out to stop the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.',
        director: 'Christopher Nolan',
        releaseDate: 'July 18, 2008',
        countries: ['USA', 'UK'],
        budget: '$185 million',
        gross: '$1.005 billion',
        writers: ['Jonathan Nolan', 'Christopher Nolan'],
        avatar: 'https://i.pinimg.com/474x/e0/3d/84/e03d849ef1359fa4f8cca713c6da213d.jpg'
    },
    { title: 'Interstellar', img: "https://i.pinimg.com/474x/f0/0e/f4/f00ef4ef28062a3ffe32c80cfa039c86.jpg", genre: 'Adventure, Drama, Sci-Fi', grade: 8.6, year: 2014, description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        director: 'Christopher Nolan',
        releaseDate: 'November 7, 2014',
        countries: ['USA', 'UK'],
        budget: '$165 million',
        gross: '$677.5 million',
        writers: ['Jonathan Nolan', 'Christopher Nolan'],
        avatar: 'https://i.pinimg.com/474x/86/f1/87/86f187c367e767750ff17e28b4d97b17.jpg'
    },
    { title: 'The Matrix', img: "https://i.pinimg.com/474x/18/d7/4e/18d74ef46e722828f75cca91b009f4a5.jpg", genre: 'Action, Sci-Fi', grade: 8.7, year: 1999,description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        director: 'Lana Wachowski, Lilly Wachowski',
        releaseDate: 'March 31, 1999',
        countries: ['USA'],
        budget: '$63 million',
        gross: '$463.5 million',
        writers: ['Lilly Wachowski', 'Lana Wachowski'],
        avatar: 'https://i.pinimg.com/474x/1d/80/85/1d8085e37c443d07f9f383b7cd178a98.jpg'
    },
    { title: 'Pulp Fiction', img: "https://i.pinimg.com/474x/e4/05/0b/e4050b92335cde4a3b5ae340fc8c5ee3.jpg", genre: 'Crime, Drama', grade: 8.9, year: 1994, description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        director: 'Quentin Tarantino',
        releaseDate: 'October 14, 1994',
        countries: ['USA'],
        budget: '$8.5 million',
        gross: '$214 million',
        writers: ['Quentin Tarantino'],
        avatar: 'https://i.pinimg.com/474x/71/7d/ff/717dff1a8b286452d6d00f8356855110.jpg'
    },
    { title: 'Fight Club', img: "https://i.pinimg.com/474x/de/1b/80/de1b8002fd9024279fccc4ccc96f18f6.jpg", genre: 'Drama', grade: 8.8, year: 1999, description: 'An insomniac office worker and a soap salesman form an underground fight club that evolves into something much more.',
        director: 'David Fincher',
        releaseDate: 'October 15, 1999',
        countries: ['USA'],
        budget: '$63 million',
        gross: '$100.9 million',
        writers: ['Chuck Palahniuk', 'Jim Uhls'],
        avatar: 'https://i.pinimg.com/474x/24/c1/c3/24c1c395d1235992f41e352cf68c35de.jpg'
    },
    { title: 'Forrest Gump', img: "https://i.pinimg.com/474x/8e/d7/a9/8ed7a9baeae932abec095d109d306fb3.jpg", genre: 'Drama, Romance', grade: 8.8, year: 1994, description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an extraordinary ability to run.',
        director: 'Robert Zemeckis',
        releaseDate: 'July 6, 1994',
        countries: ['USA'],
        budget: '$55 million',
        gross: '$678.2 million',
        writers: ['Winston Groom', 'Eric Roth'],
        avatar: 'https://i.pinimg.com/474x/ae/e5/98/aee5986aaa5fd43497c9f4c75c0aa886.jpg'
    },
    { title: 'The Shaw shank Redemption', img: "https://i.pinimg.com/474x/28/68/90/286890b1eef7ee421f4efadc6faa2fd2.jpg", genre: 'Drama', grade: 9.3, year: 1994,description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        director: 'Frank Darabont',
        releaseDate: 'September 22, 1994',
        countries: ['USA'],
        budget: '$25 million',
        gross: '$28.3 million',
        writers: ['Stephen King', 'Frank Darabont'],
        avatar: 'https://i.pinimg.com/474x/e5/f6/0f/e5f60f8673d4c0a2f90427565110bc54.jpg'
    },
    { title: 'Gladiator', img: "https://i.pinimg.com/474x/80/ef/6b/80ef6bd60a8e75dcb3e7347ca50cfe5a.jpg", genre: 'Action, Drama', grade: 8.5, year: 2000,description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
        director: 'Ridley Scott',
        releaseDate: 'May 5, 2000',
        countries: ['USA', 'UK'],
        budget: '$103 million',
        gross: '$457.6 million',
        writers: ['David Franzoni', 'John Logan', 'William Nicholson'],
        avatar: 'https://i.pinimg.com/474x/9c/83/5c/9c835c34d5c16a28e46acca1e8fa6b7b.jpg'
    },
    { title: 'The Godfather', img: "https://i.pinimg.com/474x/11/99/dc/1199dc6273680f175fd9b06c9c36d08a.jpg", genre: 'Crime, Drama', grade: 9.2, year: 1972,description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        director: 'Francis Ford Coppola',
        releaseDate: 'March 24, 1972',
        countries: ['USA'],
        budget: '$6–7 million',
        gross: '$250–291 million',
        writers: ['Mario Puzo', 'Francis Ford Coppola'],
        avatar: 'https://i.pinimg.com/474x/03/5e/a5/035ea596c6190185dde63cd4f16d8ad7.jpg'
    },
    { title: 'The Green Mile', img: "https://i.pinimg.com/474x/ca/1d/78/ca1d78a293fd9b959bb6b3d58d55faaf.jpg", genre: 'Crime, Drama, Fantasy', grade: 8.6, year: 1999, director: 'Frank Darabont',
        writers: ['Stephen King (novel)', 'Frank Darabont (screenplay)'],
        budget: '$60 million',
        gross: '$286.8 million',
        countries: ['USA'],
        description: 'A supernatural story of a man sentenced to death for the murder of two little girls, who is discovered to have a mysterious gift. As his execution date approaches, a prison guard becomes emotionally invested in his fate, learning that the prisoner’s ability may not only change his life but those of others in the prison.' ,
        avatar: 'https://i.pinimg.com/474x/67/2b/40/672b408658f22ad1eb69b4aafc22b631.jpg',
        releaseDate: 'December 10, 1999'
    },
    { title: 'Schindler\'s List', img: "https://i.pinimg.com/474x/16/dc/f0/16dcf03b7244c896d4c149b250913f0f.jpg", genre: 'Biography, Drama, History', grade: 8.9, year: 1993,
    description: ' Schindler\'s List is a historical drama based on the true story of Oskar Schindler, a German businessman who saved the lives of more than a thousand Polish Jews during the Holocaust by employing them in his factories. The film explores themes of heroism, humanity, and the horrors of genocide, capturing the moral complexities of Schindler’s transformation from a profiteer to a savior. The black-and-white cinema',
        budget: '$22 million',
        gross: '$322.2 million',
        countries: ['USA'],
        releaseDate: 'December 15, 1993',
        director: 'Steven Spielberg',
        writers: [' Steven Zaillian (screenplay)', 'based on the novel by Thomas Keneally'],
        avatar: 'https://i.pinimg.com/474x/2c/2b/3f/2c2b3f0f85d248d3f0a80f3e9b372217.jpg'
    },
    { title: 'The Silence of the Lambs', img: "https://i.pinimg.com/474x/29/ae/4a/29ae4a9e7f875628d067e029938e6251.jpg", genre: 'Crime, Drama, Thriller', grade: 8.6, year: 1991,
        director: 'Jonathan Demme',
        description: 'The Silence of the Lambs is a psychological thriller that follows FBI trainee Clarice Starling as she seeks the help of incarcerated cannibalistic serial killer Dr. Hannibal Lecter to catch another killer on the loose, known as "Buffalo Bill." The film delves deep into the minds of its complex characters and is celebrated for its chilling atmosphere, intense suspense, and remarkable performances, especially by Anthony Hopkins as Lecter and Jodie Foster as Starling. It won five Academy Awards, including Best Picture, and is regarded as a masterpiece in the thriller genre.',
        releaseDate: ' February 14, 1991',
        countries: ['Usa'],
        budget: '$19 million',
        gross: '$272.7 million',
        writers: ['Ted Tally (screenplay)', 'based on the novel by Thomas Harris'],
        avatar: 'https://i.pinimg.com/474x/af/0d/8c/af0d8c805ed767e14596f3ccaf68aa6e.jpg'
    },
    { title: 'Se7en', img: "https://i.pinimg.com/474x/47/2d/9c/472d9c78819cbc0a3c4251b0dfc9dad3.jpg", genre: 'Crime, Drama, Mystery', grade: 8.6, year: 1995,
    description: ' Se7en is a neo-noir psychological thriller that follows detectives William Somerset and David Mills as they hunt down a serial killer who bases his murders on the seven deadly sins. As they uncover each grisly crime scene, the detectives are pulled into a dark and twisted investigation that questions morality and justice. The film is known for its grim atmosphere, thought-provoking themes, and intense performances by Morgan Freeman, Brad Pitt, and Kevin Spacey. The ending, in particular, is one of the most memorable and shocking in film history.',
        director: ' David Fincher',
        writers: [' Andrew Kevin Walker'],
        budget: '$33 million',
        gross: '$327.3 million',
        releaseDate: 'September 22, 1995',
        countries: ['USA'],
        avatar: 'https://i.pinimg.com/474x/84/2f/74/842f74af5f2acc4fa236dcf81d0389b2.jpg'
    },
    { title: 'Braveheart', img: "https://i.pinimg.com/474x/5d/b5/2a/5db52a9ce13647f8bf93b962f697ddd9.jpg", genre: 'Biography, Drama, History', grade: 8.3, year: 1995,
    director: ' Mel Gibson',
        writers: 'Randall Wallace',
        budget: '$72 million',
        gross: '$213.2 million',
        releaseDate: 'May 24, 1995',
        countries: ['USA'],
        description: 'Braveheart is an epic historical war film that follows the story of William Wallace, a Scottish warrior who led his people in the First War of Scottish Independence against King Edward I of England. The film showcases Wallace\'s passionate journey for freedom, filled with fierce battles, emotional sacrifices, and his deep love for Scotland. Known for its sweeping cinematography, powerful performances, and stirring soundtrack, Braveheart is both a tale of rebellion and a tribute to the enduring spirit of a hero who fought for his people’s independence.',
        avatar: 'https://i.pinimg.com/474x/15/9b/a6/159ba624d94e7586907963ed1bb540eb.jpg'
    },
    { title: 'The Prestige', img: "https://i.pinimg.com/474x/23/bc/82/23bc82369f8bc188d8666dc0da466b34.jpg", genre: 'Drama, Mystery, Sci-Fi', grade: 8.5, year: 2006,
    director: 'Christopher Nolan',
        writers: 'Jonathan Nolan and Christopher Nolan (screenplay), based on the novel by Christopher Priest',
        budget: '$40 million',
        gross: '$109.7 million',
        releaseDate: 'October 20, 2006',
        description: ': The Prestige is a psychological thriller set in the late 19th century, centered around two rival magicians, Robert Angier and Alfred Borden, who become bitter enemies after a tragic accident. Their rivalry intensifies as they try to outdo each other with increasingly elaborate and dangerous illusions, leading to a dark obsession with achieving the ultimate trick. As they delve deeper into the secrets of their craft, they face betrayal, sacrifice, and tragic consequences. With intricate storytelling, stunning cinematography, and themes of ambition and identity, The Prestige offers a gripping exploration of the lengths people will go for greatness.',
        countries: ['UK'],
        avatar: 'https://i.pinimg.com/474x/14/03/71/1403717660c8a33856eab571cdc090f7.jpg'
    },
    { title: 'Memento', img: "https://i.pinimg.com/474x/c1/45/34/c1453464a1acde47233a684283772673.jpg", genre: 'Mystery, Thriller', grade: 8.4, year: 2000 },
    { title: 'Saving Private Ryan', img: "https://i.pinimg.com/474x/6e/a4/60/6ea460c4f0cabcf8c3e5d479ddb3d008.jpg", genre: 'Drama, War', grade: 8.6, year: 1998 },
    { title: 'The Departed', img: "https://i.pinimg.com/474x/f2/47/75/f2477527d8e2412aa9a84cfda5e4e30f.jpg", genre: 'Crime, Drama, Thriller', grade: 8.5, year: 2006 },
    { title: 'Whiplash', img: "https://i.pinimg.com/474x/4a/c5/f6/4ac5f668e3e97e7cc2ec44497611bed5.jpg", genre: 'Drama, Music', grade: 8.5, year: 2014 },
    { title: 'The Pianist', img: "https://i.pinimg.com/474x/51/47/ff/5147ffb5ecd2efa6d07c28d4f06269f9.jpg", genre: 'Biography, Drama, Music', grade: 8.5, year: 2002 },
    { title: 'Goodfellas', img: "https://i.pinimg.com/474x/42/aa/b3/42aab369f2af9c0494a5ac7d86110fd5.jpg", genre: 'Biography, Crime, Drama', grade: 8.7, year: 1990 },
    { title: 'A Beautiful Mind', img: "https://i.pinimg.com/474x/f1/fb/7f/f1fb7f73917a8390ab00bd3ac2d84f90.jpg", genre: 'Biography, Drama', grade: 8.2, year: 2001 },
    { title: 'The Lion King', img: "https://i.pinimg.com/474x/07/0f/53/070f53d151b22b5de0b678937fa24a93.jpg", genre: 'Animation, Adventure, Drama', grade: 8.5, year: 1994 },
    { title: 'Joker', img: "https://i.pinimg.com/474x/c0/91/73/c09173a1c70f7b6431f380d6cf086c7d.jpg", genre: 'Crime, Drama, Thriller', grade: 8.4, year: 2019 },
    { title: 'Toy Story', img: "https://i.pinimg.com/474x/eb/84/c9/eb84c9818e3fd1badf755646c402a679.jpg", genre: 'Animation, Adventure, Comedy', grade: 8.3, year: 1995 },
    { title: 'Finding Nemo', img: "https://i.pinimg.com/474x/e3/15/1e/e3151e0a099a7aea3741a520948ddd82.jpg", genre: 'Animation, Adventure, Comedy', grade: 8.1, year: 2003 },
    { title: 'Shrek', img: "https://i.pinimg.com/474x/82/58/d5/8258d5d80e06df3581b603530e17e7de.jpg", genre: 'Animation, Adventure, Comedy', grade: 7.9, year: 2001 },
    { title: 'The Incredibles', img: "https://i.pinimg.com/474x/43/db/52/43db52d6a3e736269a4d61bf9b5ca012.jpg", genre: 'Animation, Action, Adventure', grade: 8.0, year: 2004 },
    { title: 'Monsters, Inc.', img: "https://i.pinimg.com/474x/3a/a4/41/3aa44119d248596543cf3d18e32b4dd6.jpg", genre: 'Animation, Adventure, Comedy', grade: 8.1, year: 2001 },
    { title: 'Up', img: "https://i.pinimg.com/474x/8f/7f/cd/8f7fcdb8804bcd69a48aad5c91dd9aaf.jpg", genre: 'Animation, Adventure, Comedy', grade: 8.2, year: 2009 },
    { title: 'Inside Out', img: "https://i.pinimg.com/474x/6d/71/e7/6d71e72ccb7199f965f6b8106267a8e8.jpg", genre: 'Animation, Adventure, Comedy', grade: 8.1, year: 2015 },
    { title: 'Coco', img: "https://i.pinimg.com/474x/52/40/93/52409341203bb9276ec911ebbda4f91d.jpg", genre: 'Animation, Adventure, Comedy', grade: 8.4, year: 2017 },
    { title: 'The Grand Budapest Hotel', img: "https://i.pinimg.com/474x/b8/42/ad/b842ad05a0baaf00d42fdae43f243abc.jpg", genre: 'Adventure, Comedy, Crime', grade: 8.1, year: 2014 },
    { title: 'Parasite', img: "https://i.pinimg.com/474x/bc/e3/c2/bce3c2cbd502d88d137200ee7d928f09.jpg", genre: 'Comedy, Drama, Thriller', grade: 8.6, year: 2019 },
    { title: 'La La Land', img: "https://i.pinimg.com/474x/a3/fe/19/a3fe1953058d51294b8c061a9f76ead7.jpg", genre: 'Comedy, Drama, Music', grade: 8.0, year: 2016 },
    { title: '1917', img: "https://i.pinimg.com/474x/4a/5f/c0/4a5fc0ee0d6b578b8542dec3da9025a2.jpg", genre: 'Drama, War', grade: 8.3, year: 2019 },
    { title: 'The Social Network', img: "https://i.pinimg.com/474x/01/e9/84/01e984201cb09809e517a38f09a97112.jpg", genre: 'Biography, Drama', grade: 7.7, year: 2010 },
    { title: 'The Wolf of Wall Street', img: "https://i.pinimg.com/474x/e4/f7/36/e4f736f717cf4c7737f698c2d8ff117d.jpg", genre: 'Biography, Comedy, Crime', grade: 8.2, year: 2013 },
    { title: 'Avatar', img: "https://i.pinimg.com/474x/29/d5/d1/29d5d1246a102323071a986afe09e987.jpg", genre: 'Action, Adventure, Fantasy', grade: 7.8, year: 2009 },
    { title: 'Black Panther', img: "https://i.pinimg.com/474x/07/56/f8/0756f8738ec6120bd3e9674d85f86733.jpg", genre: 'Action, Adventure, Sci-Fi', grade: 7.3, year: 2018 },
    { title: 'Iron Man', img: "https://i.pinimg.com/474x/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg", genre: 'Action, Adventure, Sci-Fi', grade: 7.9, year: 2008 },
    { title: 'Spider-Man: Into the Spider-Verse', img: "https://i.pinimg.com/474x/13/e5/05/13e505906dcecd8df6a53ca35580071b.jpg", genre: 'Animation, Action, Adventure', grade: 8.4, year: 2018 },
    { title: 'Wonder Woman', img: "https://i.pinimg.com/474x/4a/df/d4/4adfd46b2df255375b3cb4ba2f270f8a.jpg", genre: 'Action, Adventure, Fantasy', grade: 7.4, year: 2017 },
    { title: 'Star Wars: The Empire Strikes Back', img: "https://i.pinimg.com/474x/45/f9/cf/45f9cf382e2c26f3fec9ae2ebdaeed4e.jpg", genre: 'Action, Adventure, Fantasy', grade: 8.7, year: 1980 },
    { title: 'Jurassic Park', img: "https://i.pinimg.com/474x/2d/0e/ee/2d0eee6c6235e24fa46fd584d809cc5a.jpg", genre: 'Action, Adventure, Sci-Fi', grade: 8.1, year: 1993 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', img: "https://i.pinimg.com/474x/4d/8c/eb/4d8ceb7c6e967c8c7948475e43791a2b.jpg", genre: 'Action, Adventure, Drama', grade: 8.8, year: 2001 },
    { title: 'Uncharted', img: "https://i.pinimg.com/474x/cf/c1/09/cfc109de26321ca02ca4e5316b83c4f3.jpg", genre: 'Adventure, Action, Fantasy', grade: 7.6, year: 2001 },
    { title: 'Aladdin', img: "https://i.pinimg.com/474x/3a/5b/18/3a5b18b5c64584bf174a6809b4a43b99.jpg", genre: 'Adventure, Comedy, Love, Family', grade: 7.2,year: 2001 },
    {title: 'Jumanji', img: 'https://i.pinimg.com/474x/ae/be/de/aebedea565116005359ffa4b29344622.jpg', genre: 'Adventure, Sci-Fi, Fantasy', grade: 7.2,year: 2001 },
    {title: 'Love and Monsters', img: 'https://i.pinimg.com/474x/2b/1d/b6/2b1db6333afded33090a9d7ee4e1d7ce.jpg', genre: "Action, Adventure, Fantasy", grade: 8.2,year: 2018},
];
export default films
  




