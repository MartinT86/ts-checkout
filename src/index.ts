export type productDetails = {
    name: string;
    price: number;
  }[];

const calculateDiscount = (products: string[]) => {
    const aDiscount = Math.floor(products.filter(x => x === 'A').length / 3) * 20
    return aDiscount
}

export const createCheckout = (priceList: productDetails) => {
  return (products: string[]) => {
    const subTotal =  products.reduce((a, c) => {
        const price = priceList.find(x => x.name === c)?.price
        return a + (price ?? 0)
    }, 0)
    const discount = calculateDiscount(products)
    return subTotal - discount
  };
};
