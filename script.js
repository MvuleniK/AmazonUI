/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// Landing Page scripts
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Book {
    constructor(book_name, author_name, tag, image) {
        this.book_Name = book_name;
        this.author_Name = author_name;
        this.book_Tag = tag;
        this.image_Location = image;
    }
}

const books = [
    new Book("Barbarians At The Gate", "Bryan Burrough & John Helyar", "Business", "./assest/img/book1.jpg"),
    new Book("Basic Economics", "Thomas Sowell", "Business", "./assest/img/book2.jpg"),
    new Book("Deep Learning", "I. Goodfellow & Y. Bengio & A. Courville", "Engineering", "./assest/img/book6.jpg"),
    new Book("NM for Engieering", "Karl F. Warnick", "Engineering", "./assest/img/book4.jpg"),
    new Book("The Mind Of The Strategist", "Kenichi Ohmae", "Business", "./assest/img/book5.jpg")
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

    scrollSection.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollSection.scrollLeft += evt.deltaY;
    });
    left_arrow.addEventListener("click", scrollLeft, false);
    right_arrow.addEventListener("click", scrollRight, false);

    loadBooks();
    changeName();
    changeImage();


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
    var data = "";
    for (let i = 0; i < books.length; i++) {
        data += "<div class=\"New-Book\"><img src=" + books[i].image_Location + "><p class=\"Book-Title-2\">" + books[i].book_Name + "</p><p class=\"Author-Name\">" + books[i].author_Name + "</p><p class=\"Book-Tag\">" + books[i].book_Tag + "</p></div>";
    }
    book_section.innerHTML = data;
}




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