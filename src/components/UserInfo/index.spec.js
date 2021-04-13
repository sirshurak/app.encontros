import { shallow, mount } from 'enzyme';
import UserInfo from './index';

const user = {
    photo: 'https://picsum.photos/200/?image=26',
    username: 'username',
    city: 'Test City',
    gender: 'Man',
    sexualOrientation: 'Heterosexual',
    age: 27
}

describe('UserInfo component', () => {
    it('should match shallow vertical snapshop', () => {
        const component = shallow(<UserInfo variant="vertical" ageTitle="anos" {...user}/>)
        expect(component).toMatchSnapshot();
    });

    it('should match shallow horizontal snapshop', () => {
        const component = shallow(<UserInfo variant="horizontal" ageTitle="anos" {...user}/>)
        expect(component).toMatchSnapshot();
    });
});