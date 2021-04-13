import { shallow } from 'enzyme';
import Home from './index';

describe('Home component', () => {
    it('should match shallow snapshop', () => {
        const component = shallow(<Home />)
        expect(component).toMatchSnapshot();
    });
});