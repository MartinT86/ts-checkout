import { beep } from "../src/index";

describe('My first test', () => {
    it('should blah', () => {
        expect(beep(2)).toBe(4)
    });
});