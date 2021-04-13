import { shallow, mount } from 'enzyme';
import reportWebVitals from './reportWebVitals';

describe('reportWebVitals init', () => {
    it('should execute', () => {
        reportWebVitals(function() {});
    });
});