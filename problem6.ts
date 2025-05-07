{
  //
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (!products || products.length === 0) {
      return null;
    }

    let mostExpensive = products[0];
    products.forEach((product) => {
      if (product.price > mostExpensive.price) {
        mostExpensive = product;
      }
    });
    return mostExpensive;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  const res = getMostExpensiveProduct(products);
  console.log(res);
  //
}
