import Mock from 'mockjs';
const citys = Mock.mock({
    'cityName|7': [
        {
            'index': '@province',
            'id|1-100': 100,
            'citys|5-10': [
                {
                    'city': '@city',
                    'id|1-100': 100
                }
            ]
        }
    ]
});
export default citys;
