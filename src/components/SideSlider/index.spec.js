import React from 'react';
import { shallow, mount } from 'enzyme';
import SideSlider from './index';

const SliderItems = 
        [
            (<span className="item-1" key={1}>item 1</span>),
            (<span className="item-2" key={2}>item 2</span>),
            (<span className="item-3" key={3}>item 3</span>)
        ];

describe('SideSlider component', () => {
    it('should match shallow snapshop', () => {
        const component = shallow(<SideSlider title="Title">{SliderItems}</SideSlider>)
        expect(component).toMatchSnapshot();
    });

    it('should mount slider items', () => {
        const component = mount(<SideSlider title="Title">{SliderItems}</SideSlider>);

        expect(component.find('h2').text()).toBe('Title');
        expect(component.find('.item-1')).toExist();
        expect(component.find('.item-2')).toExist();
        expect(component.find('.item-3')).toExist();
        expect(component.find('.item-4')).not.toExist();
    });
});