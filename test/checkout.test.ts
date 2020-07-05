import { getFinalPrice } from "../src/index";

describe('Checkout', () => {
    it('return 0 for no items', () => {
        expect(getFinalPrice()).toBe(0)
    });
});