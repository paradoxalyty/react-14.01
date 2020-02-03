import update from 'react-addons-update';

const initialStore = {
    name: 'Anna Puchkova',
    age: 38,
    email: 'puchkova.anne@gmail.com'
};

export default function profileReducer(store = initialStore) {
    return store;
}