import  mock from '../utils/mock';

/*mock.onPost('/api/home/login').reply(200, {
    'id': 1,
    'username': igormarcelo,
    'email': 's.igormarcelo@gmail.com'
});*/

mock.onPost('/api/home/login').reply((config) => {
    const { email, password} = JSON.parse(config.data);

    if (email !== 'xxx' || password !== 'xxx'){
        return [400, { message: 'E-mail ou senha errados!'}]
    }

    const user = {
        id: 1,
        name: 'Igor Marcelo',
        username: 'igormarcelo',
        email: 'xxx'
    }

    return [200, { user }]
});