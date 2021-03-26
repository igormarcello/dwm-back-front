import  mock from '../utils/mock';


mock.onPost('/api/home/login').reply((config) => {
    const {email, password} = JSON.parse(config.data);

    if (email !== 's.igormarcelo@gmail.com' || password !== 'admin'){
        return [400, { message: 'Seu e-mail ou senha estão incorretos'}]
    }

    const user ={
        id: 1,
        name: 'Igor Marcelo',
        username: '22quinho',
        email: 's.igormarcelo@gmail.com'
    }

    return [200,{ user }]
});