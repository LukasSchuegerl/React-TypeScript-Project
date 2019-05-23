import React from 'react';
import Content from './Content';
import {shallow} from "../enzymeTestAdapterSetup";

it('should return Component with Name equal to page prop', () => {
    const wrapper = shallow(<Content page={'Home'} />);
    expect(wrapper.childAt(0).dive().get(0).props.id).toEqual('home');
});

it('should return Name of Component equal to page prop', () => {
    const wrapper = shallow(<Content page={'Home'} />);
    expect(wrapper.instance().getPage('Home').type.name).toEqual('Home');
});