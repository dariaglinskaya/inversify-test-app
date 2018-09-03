import { myContainer } from "../src/inversify.config";
import { Warrior } from "../src/interfaces";
import { TYPES } from "../src/types";

describe("Ninja class", () => {
    const ninja = myContainer.get<Warrior>(TYPES.Warrior);

    it('should return Fight!', () => {
        const mockCallback = jest.fn(ninja => ninja.fight());

        mockCallback(ninja);

        expect(mockCallback).toHaveReturnedWith('Fight!');
    });

    it('should return Hit!', () => {
        const mockCallback = jest.fn(ninja => ninja.sneak());

        mockCallback(ninja);

        expect(mockCallback).toHaveReturnedWith('Hit!');
    });
    it('should call fight()', () => {
        const mockCallback = jest.fn(ninja => ninja.fight());

        mockCallback(ninja);

        expect(mockCallback).toHaveBeenCalled();
    });
    it('should call sneak()', () => {
        const mockCallback = jest.fn(ninja => ninja.sneak());

        mockCallback(ninja);

        expect(mockCallback).toHaveBeenCalled();
    });
});