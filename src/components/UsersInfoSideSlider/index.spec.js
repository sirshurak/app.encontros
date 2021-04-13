import React from 'react';
import { shallow, mount } from 'enzyme';
import UsersInfoSideSlider from './index';
import AppContext from '../../contexts/AppContext';

const users = [{
    photo: 'https://picsum.photos/200/?image=26',
    username: 'username',
    city: 'Test City',
    gender: 'Man',
    sexualOrientation: 'Heterosexual',
    age: 27
}];

describe('UsersInfoSideSlider component', () => {
    it('should match shallow snapshop', () => {
        const component = shallow(<UsersInfoSideSlider title="Title" ageTitle="anos" users={users}/>)
        expect(component).toMatchSnapshot();
    });

    it('should mount slider items', () => {
        const changePage = jest.fn();
        const component = mount(
            <AppContext.Provider value={{ changePage }}>
                <UsersInfoSideSlider title="Title" ageTitle="anos" users={users}/>
            </AppContext.Provider>
        );

        expect(component.find('h3').text()).toBe('username');
    });
});