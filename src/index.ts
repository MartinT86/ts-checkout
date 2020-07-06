export type productDetails = {
    name: string;
    price: number;
  }[];

export const createCheckout = (priceList: productDetails) => {
  return (products: string[]) => {
    return products.reduce((a, c) => {
        const price = priceList.find(x => x.name === c)?.price
        return a + (price ?? 0)
    }, 0)
  };
};
