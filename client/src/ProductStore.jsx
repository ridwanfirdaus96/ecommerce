const productsArray = [
  {
    id: "price_1Ny4EHI7H6155Bk9W7Bryeh2",
    title: "Twinings of London - English Breakfast Tea",
    price: 8.5,
  },
  {
    id: "price_1Ny4FTI7H6155Bk9RKlOruZl",
    title: "Twinings of London - Pure Green Tea",
    price: 8.49,
  },
  {
    id: "price_1Ny4G7I7H6155Bk9TyrTudHF",
    title: "Twinings of London - Pure Camomile",
    price: 8.39,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
