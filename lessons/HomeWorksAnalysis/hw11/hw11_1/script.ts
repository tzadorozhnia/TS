type Product = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
};

type Cart = {
    id: number;
    products: Product[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
};

type CartsResponse = {
    carts: Cart[];
    total: number;
    skip: number;
    limit: number;
};

const url = new URL("https://dummyjson.com/carts");

const divCart: HTMLDivElement = document.createElement("div");

fetch(url)
    .then((response: Response): Promise<CartsResponse> => {
        return response.json();
    })
    .then((cartsObj: CartsResponse): void => {

        for (const cart of cartsObj.carts) {

            const h2: HTMLHeadingElement =
                document.createElement("h2");

            h2.innerText = `Корзина ID: ${cart.id}`;

            divCart.appendChild(h2);


            const pCartInfo: HTMLParagraphElement =
                document.createElement("p");

            pCartInfo.innerText =
                `Загальна сума: ${cart.total}
Сума зі знижкою: ${cart.discountedTotal}
ID користувача: ${cart.userId}
Всього товарів: ${cart.totalProducts}
Загальна кількість: ${cart.totalQuantity}`;

            divCart.appendChild(pCartInfo);


            const h3: HTMLHeadingElement =
                document.createElement("h3");

            h3.innerText = "Товари:";

            divCart.appendChild(h3);


            for (const product of cart.products) {

                const pProduct: HTMLParagraphElement =
                    document.createElement("p");

                pProduct.innerText =
                    `Товар ID: ${product.id}
Назва: ${product.title}
Ціна: ${product.price}
Кількість: ${product.quantity}
Сума: ${product.total}
Знижка: ${product.discountPercentage}%
Сума зі знижкою: ${product.discountedTotal}`;

                divCart.appendChild(pProduct);


                const img: HTMLImageElement =
                    document.createElement("img");

                img.src = product.thumbnail;
                img.alt = product.title;

                divCart.appendChild(img);
            }
        }
    })
    .catch((error: unknown): void => {
        console.error("Помилка при отриманні даних:", error);
    });

document.body.appendChild(divCart);