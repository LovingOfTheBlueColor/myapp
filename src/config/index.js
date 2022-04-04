const env =
    import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/49260b14e1e188808ee48f444d77f07d/api'
    },
    text: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/49260b14e1e188808ee48f444d77f07d/api'
    },
    prod: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/49260b14e1e188808ee48f444d77f07d/api'
    }
}
export default {
    env,
    mock: true,
    ...EnvConfig[env]
}