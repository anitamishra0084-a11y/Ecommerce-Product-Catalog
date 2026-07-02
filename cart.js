let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

function displayCart(){

    cartItems.innerHTML="";

    let grandTotal=0;

    cart.forEach((item,index)=>{

        grandTotal += item.price * item.quantity;

        cartItems.innerHTML +=`

        <div class="cart-item">

            <div>

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

            </div>

            <div class="quantity">

                <button onclick="decrease(${index})">-</button>

                <span>${item.quantity}</span>

                <button onclick="increase(${index})">+</button>

            </div>

            <h3>₹${item.price * item.quantity}</h3>

            <button class="remove-btn" onclick="removeItem(${index})">
                Remove
            </button>

        </div>

        `;

    });

    total.innerHTML="Grand Total : ₹"+grandTotal;

}

function increase(index){

    cart[index].quantity++;

    saveCart();

}

function decrease(index){

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    saveCart();

}

function removeItem(index){

    cart.splice(index,1);

    saveCart();

}

function saveCart(){

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

displayCart();
const clearBtn = document.getElementById("clear-cart");

clearBtn.addEventListener("click",()=>{

    localStorage.removeItem("cart");

    cart=[];

    displayCart();

});
