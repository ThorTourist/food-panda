function getElemnt(id) {
  const element = document.getElementById(id);
  return element;
}

// console.log("Attcahed");

const buyBtns = document.getElementsByClassName("buy-btn");
// console.log(buyBtns);

for (let button of buyBtns) {
  // console.log(button);

  button.addEventListener("click", function () {
    const productImg =
      button.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;

    const productTitle =
      button.parentNode.parentNode.parentNode.childNodes[3].childNodes[1]
        .innerText;
    const productPrice =
      button.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    // console.log(productImg, productTitle, productPrice);

    // add to Cart
    const cartConatiner = getElemnt("cart-container");
    const newCart = document.createElement("div");

    newCart.innerHTML = `
    
        <div class="bg-gray-300 flex justify-between p-5">
              <div>
                <img class="w-6 h-7" src="${productImg} " alt="" />
              </div>
              <div>
                <h1 class="text-[0.8rem]">${productTitle}</h1>
                <h1 class="text-[0.8rem]">Price: <span> ${productPrice} </span>Tk</h1>
              </div>
            </div>
    `;

    cartConatiner.append(newCart);

    // total price calc
    const totalPrice = getElemnt("total-price").innerText;

    const currentTotal = Number(productPrice) + Number(totalPrice);

    getElemnt("total-price").innerText = currentTotal;

    // quantity calc

    const totalQuantity = getElemnt("total-quantity").innerText;
    const currentTotalQuantity = Number(totalQuantity) + 1;
    console.log(totalQuantity, currentTotalQuantity);
    getElemnt("total-quantity").innerText = currentTotalQuantity;
  });
}

document
  .getElementById("clear-cart-btn")
  .addEventListener("click", function () {
    cartConatiner = document.getElementById("cart-container");

    cartConatiner.innerHTML = "";

    totalPrcie = document.getElementById("total-price");
    totalPrcie.innerHTML = 0;

    totalQuantity = document.getElementById("total-quantity");
    totalQuantity.innerHTML = 0;
  });
