const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// localStorage.clear();

var currentBook = -1;
let cart = [];
// var myCartArray = [];
let myCartArray = JSON.parse(localStorage.getItem("myCart")) || [];
// localStorage.setItem("total","0");

updateCart();


// ADD TO CART
function addToCart(id) {
    // check if prodcut already exist in cart
    if (myCartArray.some((item) => item.id === id)) {
      changeNumberOfUnits("plus", id);
    } else {
      const item = books.find((product) => product.id === id);
  
      myCartArray.push(books[id]);
    }
  
    updateCart();
    console.log("Add to cart");
  }

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("myCart", JSON.stringify(myCartArray));
}


// Calculate and render subtotal

function renderSubtotal(){
	  let totalPrice = 0,
		totalItems = 0;
	myCartArray.forEach((item) => {
		totalPrice += item.book_price * item.amount;
		totalItems += item.amount;
	});
	
	subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
	// totalItemsInCartEl.innerHTML = totalItems;
}

// render the items in the cart page 


function renderCartItems() {
    
  cartItemsEl.innerHTML = ""; // clear cart element
  myCartArray.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.image_Location}">
                <h4>${item.book_Name}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${item.book_price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.amount}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
    myCartArray = myCartArray.filter((item) => item.id !== id);

  updateCart();
}


// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = myCartArray.map((item) => {
    let numberOfUnits = item.amount;

    if (item.id === id) {
        if (action === "minus" && numberOfUnits > 1) {
        // numberOfUnits--;
        myCartArray.find((book) => book.id == id).amount--;
    //   } else if (action === "plus" && numberOfUnits < item.instock) {
    } else if (action === "plus") {
        // numberOfUnits++;
        // console.log("increase");
        myCartArray.find((book) => book.id == id).amount++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });
    // if(action === "minus") {
    //     myCartArray[id].amount--;
    // }
    // else { if(action === "plus")
    // myCartArray[id].amount++;
    //     console.log(myCartArray);
    // }

  updateCart();
}
