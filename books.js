
class Book {
    constructor(id,book_name, author_name, description, ISBN,price, tag, image) {
        this.id = id;
        this.book_Name = book_name;
        this.author_Name = author_name;
        this.book_description = description;
        this.book_ISBN = ISBN;
        this.book_price = price;
        this.book_Tag = tag;
        this.amount = 0;
        this.image_Location = image;
    }
}

const books = [
    new Book(0,"Barbarians At The Gate", "Bryan Burrough","A #1 New York Times bestseller and arguably the best business narrative ever written"+
    ", Barbarians at the Gate is the classic account of the fall of RJR Nabisco. An enduring masterpiece of investigative journalism by"+
    " Bryan Burrough and John Helyar, it includes a new afterword by the authors that brings this remarkable story of greed and "+
    "double-dealings up to date twenty years after the famed deal. The Los Angeles Times calls Barbarians at the Gate, “Superlative.” "+
    "The Chicago Tribune raves, “It’s hard to imagine a better story...and it’s hard to imagine a better account.” "+
    "And in an era of spectacular business crashes and federal bailouts, it still stands as a valuable cautionary tale that must be heeded."
    ,"0099469154",500, "Business", "./assest/img/book1.jpg"),
    new Book(1,"Principles Of Artificial Neural Networks", "Daniel Graupe","The field of Artificial Neural Networks is the fastest growing field in Information Technology and specifically," + 
    " in Artificial Intelligence and Machine Learning.This must-have compendium presents the theory and case studies o" + 
    " artificial neural networks. The volume, with 4 new chapters, updates the earlier edition by highlighting recent" + 
    " developments in Deep-Learning Neural Networks, which are the recent leading approaches to neural networks. " + 
    " Uniquely, the book also includes case studies of applications of neural networks — demonstrating how such case " + 
    " studies are designed, executed and how their results are obtained.The title is written for a one-semester graduate" + 
    " or senior-level undergraduate course on artificial neural networks. It is also intended to be a self-study and a " + 
    " reference text for scientists, engineers and for researchers in medicine, finance and data mining.","9811201226",500, "Engineering", "./assest/img/book9.jpg"),
    new Book(2,"The McKinsey Way", "	Ethan M. Rasiel","When Fortune 100 corporations are stymied, it's the \"McKinsey-ites\" whom they call for help. In THE MCKINSEY WAY, former McKinsey" +
    " associate Ethan Rasiel lifts the veil to show you how the secretive McKinsey works its magic, and helps you emulate the firm's" +
    " well-honed practices in problem solving, communication, and management." +
    "\n" +
    "He shows you how McKinsey-ites think about business problems and how they work at solving them, explaining the way McKinsey approaches every aspect of a task:" +
    "How McKinsey recruits and molds its elite consultants;" +
    "How to \"sell without selling\";" +
    "How to use facts, not fear them;" +
    "Techniques to jump-start research and make brainstorming more productive;" +
    "How to build and keep a team at the top its game;" +
    "Powerful presentation methods, including the famous waterfall chart, rarely seen outside McKinsey;" +
    "How to get ultimate \"buy-in\" to your findings;" +
    "Survival tips for working in high-pressure organizations." +
    "\n" +
    "Both a behind-the-scenes look at one of the most admired and secretive companies in the business world and a toolkit of problem-solving" +
    " techniques without peer, THE MCKINSEY WAY is fascinating reading that empowers every business decision maker to become a better strategic" +
    " player in any organization.","9780070534483",500, "Business", "./assest/img/book10.jpg"),
    new Book(3,"Numerical Methods for Engieering", "Karl F. Warnick","This textbook teaches students to create computer codes used to engineer antennas, microwave circuits, and other critical" + 
    " technologies for wireless communications and other applications of electromagnetic fields and waves. Worked code examples" + 
    " are provided for MATLAB technical computing software. It is the only textbook on numerical methods that begins at the" + 
    " undergraduate engineering student level but brings students to the state-of-the-art by the end of the book. It focuses" + 
    " on the most important and popular numerical methods, going into depth with examples and problem sets of escalating complexity." + 
    " This book requires only one core course of electromagnetics, allowing it to be useful both at the senior and beginning graduate" + 
    " levels. Developing and using numerical methods in a powerful tool for students to learn the principles of intermediate and" + 
    " advanced electromagnetics. This book fills the missing space of current textbooks that either lack depth on key topics" + 
    " (particularly integral equations and the method of moments) and where the treatment is not accessible to students without" + 
    " an advanced theory course. Important topics include: Method of Moments; Finite Difference Time Domain Method; Finite" + 
    " Element Method; Finite Element Method-Boundary Element Method; Numerical Optimization; and Inverse Scattering.","1891121995",500, "Engineering", "./assest/img/book4.jpg"),
    new Book(4,"The Mind Of The Strategist", "Kenichi Ohmae","This book, full of actual examples, aims to bring to life all of the dynamic, subtlety, and variety of business strategy" + 
    " as it is practiced in the real world and in real companies. The author does not purport to be inventing strategy in" + 
    " this book or to be revealing the secrets of Japanese business and strategic planning. Rather, he is exploring with" + 
    " the reader the ways in which the strategist must think, the key principles and thought patterns that real-world" + 
    " strategists have used to move their companies forward in Japan and throughout the world. He explores the relationship" + 
    " of the Strategic Triangle formed by the company, the customer, and the competition and shows how these factors must be" + 
    " the basis for all strategic thinking and planning.","0070479046",500, "Business", "./assest/img/book5.jpg")
];
