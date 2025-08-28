// function getElemnt(id) {
//   const element = document.getElementById(id);
//   return element;
// }

// document.getElementById("buy-btn-1").addEventListener("click", function (e) {
//   e.preventDefault();

//   //   const button = document.getElementById("buy-btn-1").innerText;
//   //   const price1 = document.getElementById("price-1").innerText;

//   const button = getElemnt("buy-btn-1").innerText;
//   const item = getElemnt("item-name-1").innerText;
//   const price1 = getElemnt("price-1").innerText;
//   //   console.log(button, price1);

//   const totalPrice = getElemnt("total-price").innerText;
//   const currentTotal = Number(price1) + Number(totalPrice);

//   getElemnt("total-price").innerText = currentTotal;

//   const totalQuantity = getElemnt("total-quantity").innerText;
//   const currentTotalQuantity = Number(totalQuantity) + 1;
//   getElemnt("total-quantity").innerText = currentTotalQuantity;

//   // div create koro

//   const cartConatiner = getElemnt("cart-container");

//   const newCart = document.createElement("div");

//   newCart.innerHTML = `

//  <div class="bg-gray-300 flex justify-between p-5">
//           <div>
//             <img class="w-6 h-7" src="assets/kitchen-1.png" alt="" />
//           </div>
//           <div>
//             <h1 class="text-[0.8rem]">${item}</h1>
//             <h1 class="text-[0.8rem]">Price: <span> ${price1} </span>Tk</h1>
//           </div>
//         </div>
//     `;

//   cartConatiner.append(newCart);
// });
