import Mock from 'mockjs';
export default Mock.mock({
    'province|6-10': [
        {
            'pri': '@province',
            'citys|10': [
                {
                    'city': '@city'
                }
            ]
        }
    ],
    'hotCity|10': [
        {'hots': '@city'}
    ]
});
