import axios from 'axios';
import Mockadapter from 'axios-mock-adapter';
import city from './data/city.js';
import nav from './data/nav.json';
import dls from './data/dls.json';
import bar from './data/bar.json';
export default {
    bootstrop () {
        const mock = new Mockadapter(axios);
        mock.onPost('/citys/msg').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, city]);
            });
        });
        mock.onGet('/navs').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, nav]);
            });
        });
        mock.onGet('/bar/msg').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, bar]);
            });
        });
        mock.onPost('/dls/msg').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, dls]);
            });
        });
    }
};
