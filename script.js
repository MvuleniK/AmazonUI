/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// Landing Page scripts
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Book {
    constructor(book_name, author_name, description, ISBN,price, tag, image) {
        this.book_Name = book_name;
        this.author_Name = author_name;
        this.book_description = description;
        this.book_ISBN = ISBN;
        this.book_price = price;
        this.book_Tag = tag;
        this.image_Location = image;
    }
}

const books = [
    new Book("Barbarians At The Gate", "Bryan Burrough","A #1 New York Times bestseller and arguably the best business narrative ever written"+
    ", Barbarians at the Gate is the classic account of the fall of RJR Nabisco. An enduring masterpiece of investigative journalism by"+
    " Bryan Burrough and John Helyar, it includes a new afterword by the authors that brings this remarkable story of greed and "+
    "double-dealings up to date twenty years after the famed deal. The Los Angeles Times calls Barbarians at the Gate, “Superlative.” "+
    "The Chicago Tribune raves, “It’s hard to imagine a better story...and it’s hard to imagine a better account.” "+
    "And in an era of spectacular business crashes and federal bailouts, it still stands as a valuable cautionary tale that must be heeded."
    ,"0099469154",500, "Business", "./assest/img/book1.jpg"),
    new Book("Principles Of Artificial Neural Networks", "Daniel Graupe","The field of Artificial Neural Networks is the fastest growing field in Information Technology and specifically," + 
    " in Artificial Intelligence and Machine Learning.This must-have compendium presents the theory and case studies o" + 
    " artificial neural networks. The volume, with 4 new chapters, updates the earlier edition by highlighting recent" + 
    " developments in Deep-Learning Neural Networks, which are the recent leading approaches to neural networks. " + 
    " Uniquely, the book also includes case studies of applications of neural networks — demonstrating how such case " + 
    " studies are designed, executed and how their results are obtained.The title is written for a one-semester graduate" + 
    " or senior-level undergraduate course on artificial neural networks. It is also intended to be a self-study and a " + 
    " reference text for scientists, engineers and for researchers in medicine, finance and data mining.","9811201226",500, "Engineering", "./assest/img/book9.jpg"),
    new Book("The McKinsey Way", "	Ethan M. Rasiel","When Fortune 100 corporations are stymied, it's the \"McKinsey-ites\" whom they call for help. In THE MCKINSEY WAY, former McKinsey" +
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
    new Book("Numerical Methods for Engieering", "Karl F. Warnick","This textbook teaches students to create computer codes used to engineer antennas, microwave circuits, and other critical" + 
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
    new Book("The Mind Of The Strategist", "Kenichi Ohmae","This book, full of actual examples, aims to bring to life all of the dynamic, subtlety, and variety of business strategy" + 
    " as it is practiced in the real world and in real companies. The author does not purport to be inventing strategy in" + 
    " this book or to be revealing the secrets of Japanese business and strategic planning. Rather, he is exploring with" + 
    " the reader the ways in which the strategist must think, the key principles and thought patterns that real-world" + 
    " strategists have used to move their companies forward in Japan and throughout the world. He explores the relationship" + 
    " of the Strategic Triangle formed by the company, the customer, and the competition and shows how these factors must be" + 
    " the basis for all strategic thinking and planning.","0070479046",500, "Business", "./assest/img/book5.jpg")
];





let currentScrollPosition = 0;
let scrollAmount = 400;
const sCont = document.querySelector("#Read-Books-Section");
const hScroll = document.querySelector("#Last-Read");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");
btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
    currentScrollPosition += (val * scrollAmount);
    sCont.style.left = currentScrollPosition + "px";
    if (currentScrollPosition >= 0) {
        currentScrollPosition = 0
        btnScrollLeft.style.opacity = "0";
    } else {
        btnScrollLeft.style.opacity = "1";
    }
    if (currentScrollPosition <= maxScroll) {
        currentScrollPosition = maxScroll;
        btnScrollRight.style.opacity = "0";

    } else {
        btnScrollRight.style.opacity = "1";
    }
    sCont.style.left = currentScrollPosition + "px";
}

function scrollLeft() {
    const scrollSection = document.querySelector("#Read-Books-Section");
    scrollSection.scrollLeft += -150;
}

function scrollRight() {
    const scrollSection = document.querySelector("#Read-Books-Section");
    scrollSection.scrollLeft += 150;
}

function scrollArea() {
    const section = document.querySelector("#Read-Books-Section");
    section.scrollLeft += 50;
}

function initScroll() {
    let currentScrollPosition = 0;
    let scrollAmount = 400;
    const sCont = document.querySelector("#Read-Books-Section");
    const hScroll = document.querySelector("#Last-Read");
    const btnScrollLeft = document.querySelector("#btn-scroll-left");
    const btnScrollRight = document.querySelector("#btn-scroll-right");
    btnScrollLeft.style.opacity = "0";

    let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
}

function addEvents() {

    const scrollSection = document.querySelector("#Read-Books-Section");
    const left_scroll_botton = document.getElementById("btn-scroll-left");
    const right_scroll_botton = document.getElementById("btn-scroll-right");
    const book_section = document.getElementById("New-Books-Section");
    const right_arrow = document.getElementById("Scroll-Right");
    const left_arrow = document.getElementById("Scroll-Left");
    const image_input = document.querySelector("#imageInput");
    
    const cart_increase = document.getElementById("cartIncrease");
    const cart_decrease = document.getElementById("cartDecrease");

    scrollSection.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollSection.scrollLeft += evt.deltaY;
    });
    left_arrow.addEventListener("click", scrollLeft, false);
    right_arrow.addEventListener("click", scrollRight, false);
    cart_increase.addEventListener("click", function() {
        modalCounter(1);
    },false);
    cart_decrease.addEventListener("click",function() {
        modalCounter(-1);
    },false);

    loadBooks();
    changeName();
    changeImage();
    // modelBox();

    // const modal_buttton = document.getElementsByClassName("btn btn-info btn-lg")[0];
    // modal_buttton.click();

    // generatePopup();

}

function changeImage() {
    const img = document.getElementById("userImage");
    img.src = localStorage.getItem("image");
}

function addImageEvent() {
    const image_input = document.querySelector("#imageInput");
    image_input.addEventListener("change", encodeImage);
}

function encodeImage() {
    const imgPath = document.querySelector("#imageInput").files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function() {
        localStorage.setItem('image', reader.result);
    }, false);

    if (imgPath) {
        reader.readAsDataURL(imgPath);
    }

    let newImg = document.getElementById("userImage1");
    newImg.src = localStorage.getItem("image");
}

function loadBooks() {
    const book_section = document.getElementById("New-Books-Section");
    
    const modal = document.getElementById("myModal");
    const modal_buttton = document.getElementsByClassName("btn btn-info btn-lg")[0];
    var data = "";
    for (let i = 0; i < books.length; i++) {

        // Activate a modal without writing JavaScript. Set data-toggle="modal" on a 
        // controller element, like a button, along with a data-target="#foo" or href="#foo" 
        // to target a specific modal to toggle

        
        // data += "<div class=\"New-Book\"> <button class=\"trigger\"  onclick=\"modelBox()\" ><img src=" + books[i].image_Location + "> </button> <p class=\"Book-Title-2\">" + books[i].book_Name + "</p><p class=\"Author-Name\">" + books[i].author_Name + "</p><p class=\"Book-Tag\">" + books[i].book_Tag + "</p>   </div>";
        data += "<div class=\"New-Book\"><img src=" + books[i].image_Location + "> </button> <p class=\"Book-Title-2\">" + books[i].book_Name + "</p><p class=\"Author-Name\">" + books[i].author_Name + "</p><p class=\"Book-Tag\">" + books[i].book_Tag + "</p>   </div>";
    }

    book_section.innerHTML = data;

    const all_books = document.getElementsByClassName("New-Book");

    for(let i = 0; i < all_books.length; i++) {
        all_books[i].addEventListener('click', function() {
            generatePopup(i);
            modal_buttton.click();
        },false);
    }
}
function generatePopup(book_number) {
    const modal = document.getElementById("myModal");
    const modal_table = document.getElementById("modalTable");
    const modal_image = document.getElementById("modalImage");

    modal_table.rows[0].innerHTML = "<td><h3>" + books[book_number].book_Name + "</h3></td>";
    modal_table.rows[1].innerHTML = "<td>By: " + books[book_number].author_Name + "</td>";
    modal_table.rows[2].innerHTML = "<td>ISBN: " + books[book_number].book_ISBN + "</td>";
    modal_table.rows[3].innerHTML = "<td>Price: R" + books[book_number].book_price + "</td>";
    modal_table.rows[4].innerHTML = "<td>" + books[book_number].book_description + "</td>";

    modal_image.src = books[book_number].image_Location;
}


function modalCounter(amount) {
    const cart_counter = document.getElementById("usr");

    if(cart_counter.value > 0 ) {
        if(amount == 1) {
            cart_counter.value = parseInt(cart_counter.value) + 1;
        }
        else if(amount == -1 && cart_counter.value != "1") {
            cart_counter.value = parseInt(cart_counter.value) - 1;
        }
    }
}





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// Cart page scripts
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// let myProductItem = [item1, item2, item3, item4, item5, item6, item7, item8];

// cart array

let myCartArray = [];

function saveToCart() {
	// event.preventDefault();
    // const target = event.target;
    // const alreadyInCart=mycart.checkIfItemExists()
    myCartArray.push(books);
    localStorage.setItem("myCartArray", JSON.stringify(myCartArray));
    let total = Number(localStorage.getItem("total"));
    
    if (total === null) {
        // Save it to the localStorage cart
        localStorage.setItem("total",books.price)
    } else {
        total += Number(myItem.price);
        localStorage.setItem("total", myItem.price);
        // The product wasn't found... maybe someone tampered with the HTML?
    }
    alert('You added ' + myItem.name + ' to your cart.')
    /*console.log(myItem.name);
    console.log(myItem.price);
    console.log(myItem.img);*/

  const productId = target.dataset.id;
  const product = products.find((i) => i.id === productId);
  console.debug(product);
  

}



$('.addtocart').on('click', saveToCart);

const container = $(".books");

books.forEach((i) =>{
    container.append(`
<div class="card">
    <img src="${i.image}" class="card-img-top" />
  <div class="card-body">
      <div class="card-title">${i.book_name}</div>
      <p class="card-text">$${i.price}</p>
    <footer><button class="btn btn-primary addtocart" data-id="${i.tag}">Buy Now</button></footer>
  </div>
</div>
    `);
});






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////








// let myCartItem = localStorage.getItem("myCartItem");
// myCartItem = JSON.parse(myCartItem);

// if (myCartItem === null) {
//     console.log('Cart is Empty');
// } else {
//     myCartItem.forEach(e => {
//         console.log(e);
//     })
// }

// var html = "<table border='1|1'>";
// for (var i = 0; i < myCartItem.length; i++) {
//     html += "<th>" + "Image" + "</th>";
//     html += "<th>" + "Product Name" + "</th>";
//     html += "<th>" + "Price" + "</th>";
//     html += "<tr>";
//     html += "<td>" + '<img src="' + myCartItem[i].img + '">' + "</td>";
//     html += "<td>" + myCartItem[i].name + "</td>";
//     html += "<td>" + "R" + myCartItem[i].price + "</td>";

//     html += "</tr>";

// }
// html += "</table>";
// document.getElementById("cartSection").innerHTML = html;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// Registration Page scripts
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function registration() {
    /////////////////////Registration  Variables ///////////////////////////////////////////////////////////
    var firstname = document.getElementById("regFirstName").value;
    var email = document.getElementById("regMail").value;
    var phone = document.getElementById("regPhonenumber").value;
    var pwd = document.getElementById("regPassword").value;
    var cpwd = document.getElementById("regPasswordconfirm").value;

    //console.log(firstname + ", " + email + ", " + pwd + ", " + cpwd);



    //conditions and parameters of the input data ///////////////////////////////////
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var numFilter = /^\d{10}$/;

    //conditions and parameters of the input data ///////////////////////////////////

    if (firstname == '') {
        alert('Please enter your name')
    } else if (!letters.test(firstname)) {
        alert('Name field requires only alphabet characters')
    } else if (email == '') {
        alert("Please enter your email")
    } else if (!filter.test(email)) {
        alert('Invalid email');
    } else if (phone == "") {
        window.alert("Please enter your telephone number");
    } else if (!numFilter.test(phone)) {
        alert('invalid phone number, only numeric digits')
    } else if (pwd == '') {
        alert('Please enter Password');
    } else if (cpwd == '') {
        alert('Enter Confirm Password');
    } else if (!pwd_expression.test(pwd)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    } else if (pwd != cpwd) {
        alert('Password not Matched');
    } else if (document.getElementById("regPassword").value.length < 6) {
        alert('Password minimum length is 6');
    } else if (document.getElementById("regPassword").value.length > 12) {
        alert('Password max length is 12');
    } else {
        ////Store Information To Localstorage////
        //var firstname = document.getElementById("regFirstName").value;
        //var email = document.getElementById("regMail").value;
        //var pwd = document.getElementById("regPassword").value;
        //var cpwd = document.getElementById("regPasswordconfirm").value;
        localStorage.setItem('regFirstName', firstname);
        localStorage.setItem('regMail', email);
        localStorage.setItem('regPasswordconfirm', cpwd);
        ////////redirect user to login form                                          
        alert('Your account has been created , Redirecting you to Login Website');
        // Redirecting to other page or webste code. 
        window.location.href = "./login.html";
    }



}

function changeName() {
    const name_Element = document.getElementById("regFirstName");
    name_Element.innerHTML = localStorage.regFirstName;
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// Login scripts
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//This part of the script will check from local storage if the variables 
//corresspond to the the stored storage

//checking/Login function

function login() {
    var storedName = localStorage.getItem('regMail');
    var storedPw = localStorage.getItem('regPasswordconfirm');

    var userName = document.getElementById('logEmail');
    var userPw = document.getElementById('logPassword');
    //var userRemember = document.getElementById("rememberMe");

    if (userName.value == storedName && userPw.value == storedPw) {
        alert('You are logged in, redirecting you to landing page');
        window.location.href = "./landingPage.html";
    } else {
        alert('Error on login');
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////

///////Image slider gallary//////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////





/////////////////////Login Elements code1 ////////////////////////////////////////////////////////


//class loginObject {
//   constructor(username, password) {
//       this.username = username;
//       this.password = password;
//   }

//}

//function login() {



//define the variables for the 
//  var username = document.getElementById('logEmail').value;
// var password = document.getElementById('logPassword').value;

//else if (!filter.test(email)) {
//    alert('Invalid email');

// if (username == "Formget" && password == "formget#123") {
//   alert("Login successfully");
// window.location.href = "./index.html"; // Redirecting to mainpage
//  return false;
//  } else { ///// Fix this portion!
////////redirect user to login form                                          
//    alert('Thank You for Registration & You are Redirecting to Website');
//     // Redirecting to other page or webste code. 
//   window.location.href = "./index.html";
//   }


//  var loginProfile = new loginObject(username, password);

//  var jsonString = JSON.stringify(loginProfile);
//   setLogin(jsonString);

//}

//function setLogin(jsonString) {
//    localStorage.setItem("details", jsonString);
//}

//function getLogin() {
//    var jsonObj = localStorage.details;
//    var loginProfileObj = JSON.parse(jsonObj);
//}