import { createCheckout, productDetails } from "../src/index";

const priceList = [
  { name: "A", price: 50 },
  { name: "B", price: 30 },
  { name: "C", price: 20 },
  { name: "D", price: 15 },
];

describe("Checkout", () => {
  it("return price for single item", () => {
    const checkout = createCheckout(priceList);
    expect(checkout(["A"])).toBe(50);
  });

  it("should sum multiple items", () => {
    const checkout = createCheckout(priceList);
    expect(checkout(["A", "A"])).toBe(100);
  });

  it("should sum items of different prices", () => {
    const checkout = createCheckout(priceList);
    expect(checkout(["A", "B", "C", "D"])).toBe(115);
  });

  it('should remove discounts for A', () => {
    const checkout = createCheckout(priceList);
    expect(checkout(["A", "A", "A"])).toBe(130);
  });

  it('should remove discounts for B', () => {
    const checkout = createCheckout(priceList);
    expect(checkout(["B", "B"])).toBe(45);
  });
});
