import axios from 'axios';
import Mockadapter from 'axios-mock-adapter';
import userList from './data/users';
export default {
    toRun () {
        const mock = new Mockadapter(axios);
        mock.onPost('/login/users').reply((config) => {
            let val = userList.userList.find((v) => {
                if (v.userName === config.params.userName) {
                    return 1;
                }
            });
            return new Promise((resolve, reject) => {
                if (val) {
                    resolve([200, val]);
                }
            });
        });
    }
};
