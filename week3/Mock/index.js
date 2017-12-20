import axios from 'axios';
import Mockadapter from 'axios-mock-adapter';
export default {
    toRun () {
        const mock = new Mockadapter(axios);
        mock.onPost('/users/name').reply((config) => {
            return new Promise((resolve, reject) => {
                if (config.params.userName === 'admin') {
                    resolve([200, 'admin']);
                }
            });
        });
    }
};
