const url = new URL("https://dummyjson.com/carts");
const divCart = document.createElement("div");
fetch(url)
    .then((response) => {
    return response.json();
})
    .then((cartsObj) => {
    for (const cart of cartsObj.carts) {
        const h2 = document.createElement("h2");
        h2.innerText = `Корзина ID: ${cart.id}`;
        divCart.appendChild(h2);
        const pCartInfo = document.createElement("p");
        pCartInfo.innerText =
            `Загальна сума: ${cart.total}
Сума зі знижкою: ${cart.discountedTotal}
ID користувача: ${cart.userId}
Всього товарів: ${cart.totalProducts}
Загальна кількість: ${cart.totalQuantity}`;
        divCart.appendChild(pCartInfo);
        const h3 = document.createElement("h3");
        h3.innerText = "Товари:";
        divCart.appendChild(h3);
        for (const product of cart.products) {
            const pProduct = document.createElement("p");
            pProduct.innerText =
                `Товар ID: ${product.id}
Назва: ${product.title}
Ціна: ${product.price}
Кількість: ${product.quantity}
Сума: ${product.total}
Знижка: ${product.discountPercentage}%
Сума зі знижкою: ${product.discountedTotal}`;
            divCart.appendChild(pProduct);
            const img = document.createElement("img");
            img.src = product.thumbnail;
            img.alt = product.title;
            divCart.appendChild(img);
        }
    }
})
    .catch((error) => {
    console.error("Помилка при отриманні даних:", error);
});
document.body.appendChild(divCart);
export {};
//# sourceMappingURL=script.js.map