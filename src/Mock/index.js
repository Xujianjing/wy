import axios from 'axios';
import Mockadapter from 'axios-mock-adapter';
import banners from './data/banner.json';
import userMsg from './data/users';
import navList from './data/nav.json';
import dls from './data/dls.json';
import msg from './data/msg.json';
import city from './data/city.js';
import myCar from './data/mycar.json';
export default {
    toRun () {
        const mock = new Mockadapter(axios);
        mock.onPost('/banner/imgs').reply((config) => {
            return new Promise((resolve, reject) => {
                if (config) {
                    resolve([200, banners]);
                }
            });
        });
        mock.onPost('/users/msg').reply((config) => {
            let userName = config.params.userName;
            const loginName = userMsg.userList.find((v) => {
                if (v.username === userName) {
                    return 1;
                }
            });
            return new Promise((resolve, reject) => {
                if (loginName) {
                    resolve([200, loginName]);
                }
            });
        });
        mock.onPost('/mylist').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, navList]);
            });
        });
        mock.onGet('/shouye/dls').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, dls]);
            });
        });
        mock.onGet('/msg').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, msg]);
            });
        });
        mock.onPost('/city').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, city]);
            });
        });
        mock.onPost('/mycar').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, myCar]);
            });
        });
    }
};
