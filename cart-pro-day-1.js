let Ftitle = document.getElementById('ftitle');
let Fdescription = document.getElementById('fdescription');
let Fcategory = document.getElementById('fcategory');
let Fprice = document.getElementById('fprice');
let button = document.getElementById('btn');


const  tbody = document.querySelector("#tbody");

button.addEventListener('click', () => {
    console.log(ftitle.value)
    let data = JSON.parse(localStorage.getItem('users')) || [];
    data.push(
        {
            title: Ftitle.value,
            description: Fdescription.value,
            category: Fcategory.value,
            price: Fprice.value

        }
    )
    localStorage.setItem('users',JSON.stringify(data))
    loadData()
});



const loadData = () => {
    const users = JSON.parse(localStorage.getItem('users'))
   
    let result =""
    users.forEach((user,index)=>{
        let row =` <tr>
                      <td>${++index}</td>
                      <td>${user.title}</td>
                      <td>${user.description}</td>
                      <td>${user.category}</td>
                       <td>${user.price}</td>
                  </tr>`
                  result=result+row
    });
    tbody.innerHTML=result
};
loadData();




// // Get necessary elements
// const cartItemsContainer = document.getElementById('cart-items');
// const totalPriceElement = document.getElementById('total-price');
// const checkoutButton = document.getElementById('checkout-btn');

// let cart = [];


// document.querySelectorAll('.add-to-cart').forEach(button => {
//   button.addEventListener('click', () => {
//     const product = {
//       id: button.dataset.id,
//       name: button.dataset.name,
//       price: parseFloat(button.dataset.price)
//     };
//     addToCart(product);
//   });
// });


// function addToCart(product) {
//   cart.push(product);
//   updateCartDisplay();
// }


// function removeFromCart(index) {
//   cart.splice(index, 1);
//   updateCartDisplay();
// }

// function updateCartDisplay() {
//   cartItemsContainer.innerHTML = '';
//   let total = 0;

//   cart.forEach((product, index) => {
//     const li = document.createElement('li');
//     li.innerHTML = `${product.name} - $${product.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
//     cartItemsContainer.appendChild(li);
//     total += product.price;
//   });

//   totalPriceElement.textContent = total.toFixed(2);
// }

// checkoutButton.addEventListener('click', () => {
//   if (cart.length > 0) {
//     alert(`Your total is $${totalPriceElement.textContent}. Proceeding to checkout.`);
//   } else {
//     alert('Your cart is empty!');
//   }
// });
