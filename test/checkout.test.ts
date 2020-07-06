import { createCheckout } from "../src/index";



describe('Checkout', () => {
    it('return price for single item', () => {
        const checkout = createCheckout([{name:'A', price: 50}])
        expect(checkout(['A'])).toBe(50)
    });

    it('should sum multiple items', () => {
        const checkout = createCheckout([{name:'A', price: 50}])
        expect(checkout(['A','A'])).toBe(100)
    });
});