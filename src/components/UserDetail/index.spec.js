import { shallow, mount } from 'enzyme';
import UserDetail from './index';

const user = {
    photo: 'https://picsum.photos/200/?image=26',
    username: 'username',
    city: 'Test City',
    gender: 'Man',
    sexualOrientation: 'Heterosexual',
    age: 27
}

describe('UserDetail component', () => {
    it('should match shallow snapshop', () => {
        const component = shallow(<UserDetail user={user}/>)
        expect(component).toMatchSnapshot();
    });
});