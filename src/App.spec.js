import { shallow, mount } from 'enzyme';
import App from './App';

jest.mock('./hooks/UseUsers');

import useUsers from './hooks/UseUsers';

describe('App component', () => {
    it('should match shallow snapshop', () => {
        const component = shallow(<App />)
        expect(component).toMatchSnapshot();
    });

    it('should mount and change page', () => {
        useUsers.mockReturnValue({
            users: [{
                photo: 'https://picsum.photos/200/?image=26',
                username: 'username',
                city: 'Test City',
                gender: 'Man',
                sexualOrientation: 'Heterosexual',
                age: 27
            }]
        });
        document.getElementById = jest.fn(() => ({ addEventListener: jest.fn((name, func) => func()), removeEventListener: jest.fn() }));
        const component = mount(<App />);
        
        component.find('button').forEach((button) => button.simulate('click', {}));
    });
});