import * as Requester from './Requester';

jest.mock('axios');

import axios from 'axios';

axios.mockImplementation(() => ({ get: jest.fn() }))

describe('Requester utils', () => {
    it('should return get', () => {
        const obj = {};
        axios.get.mockReturnValue(obj);

        const result = Requester.Get('/test');

        expect(axios.get).toBeCalled();
        expect(result).toBe(obj);
    });
})