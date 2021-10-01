import { AsyncStorage } from 'react-native';

export default Utils =  {
    doLogin: function(email, password, callback){
        const data = {
            email, password
        }

        fetch(`https://kalendars.io/api/v1/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => {
            AsyncStorage.setItem('LOGIN::USER::RES', JSON.stringify(json))
            .then(() => {
                callback && callback({status: 200})
            });
        }).catch(res => {
            callback && callback(res)
        });
    },

    doSignUp: function(data, callback){
        fetch(`https://kalendars.io/api/v1/register-or-login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => {
            AsyncStorage.setItem('LOGIN::USER::RES', JSON.stringify(json))
            .then(() => {
                callback && callback({status: 200})
            });
        }).catch(res => {
            callback && callback(res)
        });
    }
}