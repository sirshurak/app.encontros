import { shallow, mount } from 'enzyme';
import GoHome from './index';
import AppContext from '../../contexts/AppContext';

describe('GoHome component', () => {
    it('should match shallow snapshop', () => {
        const component = shallow(<GoHome />)
        expect(component).toMatchSnapshot();
    });

    it('should mount and click button', () => {
        const changePage = jest.fn();
        const component = mount(
            <AppContext.Provider value={{ changePage }}>
                <GoHome />
            </AppContext.Provider>
        );
        component.find('button').simulate('click', {});
        expect(changePage).toBeCalled();
    });
});