import axios from 'axios'
import {showCityList} from '../Api'
import MockAdapter from 'axios-mock-adapter' 

let mock = new MockAdapter(axios,{delayResponse: 1000})

mock.onGet('/api/queryAdvertise').reply(function(config) {
    let params = config.params;
    let data = {
        code: showCityList.code,
        data: []
    };
    data.data = showCityList.data.slice( params.page*params.pageSize,  params.page*params.pageSize+params.pageSize )
    return [200, data]
})

