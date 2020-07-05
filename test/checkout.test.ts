import { createCheckout } from "../src/index";

describe('Checkout', () => {
    it('return 0 for no items', () => {
        const checkout = createCheckout({name:'A', price: 50})
        expect(checkout()).toBe(0)
    });

    it('return price for single item', () => {
        const checkout = createCheckout({name:'A', price: 50})
        expect(checkout('A')).toBe(50)
    });
});