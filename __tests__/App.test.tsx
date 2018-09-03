import { App } from "../src/App";
import { Button } from 'antd';
import { mount, shallow } from 'enzyme';
import * as React from 'react';

describe("React app", () => {
    const app = <App />;

    it('renders without crashing', () => {

        const wrapper = mount(app);

        expect(wrapper).toBeDefined();
    });
    it('should render header', () => {
        const child = <header className="App-header">
            <img className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>;

        const wrapper = mount(app);

        expect(wrapper.children().contains(child)).toBeTruthy();
    });
    it('initiates click on button fight', () => {
        let wrapper = shallow(<App />, { disableLifecycleMethods: true });
        wrapper.instance().fight = jest.fn();
        let { fight } = wrapper.instance();

        expect(fight).toHaveBeenCalledTimes(0);

        wrapper.find('.fight-btn').simulate('click');

        expect(fight).toHaveBeenCalledTimes(1);
    });
    it('initiates click on button throw', () => {
        let wrapper = shallow(<App />, { disableLifecycleMethods: true });
        wrapper.instance().sneak = jest.fn();
        let { sneak } = wrapper.instance();

        expect(sneak).toHaveBeenCalledTimes(0);

        wrapper.find('.sneak-btn').simulate('click');

        expect(sneak).toHaveBeenCalledTimes(1);
    });
    it('should open modal after click', () => {
        let wrapper = shallow(<App />, { disableLifecycleMethods: true });
        wrapper.instance().modal = jest.fn();
        let { modal } = wrapper.instance();

        expect(modal).toHaveBeenCalledTimes(0);

        wrapper.find('.sneak-btn').simulate('click');
        
        expect(modal).toHaveBeenCalledTimes(1);

        wrapper.find('.fight-btn').simulate('click');
        
        expect(modal).toHaveBeenCalledTimes(2);
    });
});