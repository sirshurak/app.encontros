import { shallow, mount } from 'enzyme';
import UserInfoClick from './index';
import AppContext from '../../contexts/AppContext';

const user = {
    photo: 'https://picsum.photos/200/?image=26',
    username: 'username',
    city: 'Test City',
    gender: 'Man',
    sexualOrientation: 'Heterosexual',
    age: 27
}

describe('UserInfoClick component', () => {
    it('should match shallow snapshop', () => {
        const component = shallow(<UserInfoClick user={user}/>)
        expect(component).toMatchSnapshot();
    });

    it('should mount and click button', () => {
        const changePage = jest.fn();
        const component = mount(
            <AppContext.Provider value={{ changePage }}>
                <UserInfoClick  user={user}/>
            </AppContext.Provider>
        );
        component.find('button').simulate('click', {});
        expect(changePage).toBeCalled();
    });
});