import { myContainer } from "../src/inversify.config";
import * as React from 'react';
import { Warrior } from "../src/interfaces";
import { TYPES } from "../src/types";
import { App } from "../src/App";
import { mount } from 'enzyme';

describe("React app", () => {
    it('renders without crashing', () => {
        const app = <App />;
        
        const wrapper = mount(app);

        expect(wrapper).toBeDefined();
    })
});
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