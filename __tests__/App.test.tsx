import { App } from "../src/App";
import { mount } from 'enzyme';
import * as React from 'react';

describe("React app", () => {
    it('renders without crashing', () => {
        const app = <App />;
        
        const wrapper = mount(app);

        expect(wrapper).toBeDefined();
    })
});