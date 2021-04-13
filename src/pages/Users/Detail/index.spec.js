import { shallow } from 'enzyme';
import UsersDetail from './index';

describe('UsersDetail component', () => {
    it('should match shallow snapshop', () => {
        const component = shallow(<UsersDetail />)
        expect(component).toMatchSnapshot();
    });
});