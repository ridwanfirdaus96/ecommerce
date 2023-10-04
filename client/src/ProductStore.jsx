const productsArray = [
  {
    id: "price_1NvAJqI7H6155Bk9EBBk3uJm",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1NvAKuI7H6155Bk94MnzT6mh",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1NvALmI7H6155Bk9mBScQ27W",
    title: "Camera",
    price: 22.99,
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
