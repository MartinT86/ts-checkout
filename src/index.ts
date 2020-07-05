type productDetails = {
    name: string,
    price: number
}

export const createCheckout = (priceList: productDetails) => {
    return (product?: string) => {
        if (product) {
            return priceList.price
        }
        return 0
    }
}