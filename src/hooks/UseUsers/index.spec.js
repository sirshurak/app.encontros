import useUsers from './index';

jest.mock('swr');

import useSWR from 'swr';

jest.mock('axios');

import axios from 'axios';

describe('Requester utils', () => {
    it('should return get', () => {
        const obj = { users: { username: 'teste' }, error: "", isValidating: false, mutate: false, revalidate: false };
        const objAxios = {...obj, data: { data: { username: 'teste' } }};
        axios.get.mockReturnValue(objAxios);
        useSWR.mockImplementation((args, func) => func(args));

        const result = useUsers('test');

        expect(useSWR).toBeCalled();
        expect(axios.get).toBeCalled();
        expect(result).toStrictEqual(obj);
    });
})