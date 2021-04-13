import { shallow, mount } from 'enzyme';

jest.mock('react-dom');

import ReactDOM from "react-dom";

ReactDOM.render = jest.fn();

describe('Index init', () => {
    it('should addEventListener', () => {
        document.addEventListener = jest.fn((url, func) => func());
        require('./index');
    });
});