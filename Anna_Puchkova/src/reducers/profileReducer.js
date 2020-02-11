import update from 'react-addons-update';
import { LOAD_PROFILE, SUCCESS_PROFILE_LOADING, START_PROFILE_LOADING,  ERROR_PROFILE_LOADING } from "../actions/profileActions";

const initialStore = {
    name: 'Anna Puchkova',
    age: 38,
    email: 'puchkova.anne@gmail.com'
  /*  profile: {},
    isLoading: true,*/
};

export default function profileReducer(store = initialStore) {
    return store;
}

/*export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case START_PROFILE_LOADING: {
            return update(store, {
               isLoading: { $set: true },
            });
        }
        case SUCCESS_PROFILE_LOADING: {
            const profile = {};
            action.payload.forEach(msg => {
                const { name, age, email } = msg;
                profile[msg.id] = { name, age, email };
            });
            
            return update(store, {
                profile: { $set: profile[1] },
                isLoading: { $set: false },
            });
        }
        case ERROR_PROFILE_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
 
        
        default:
            return store;
    }
}*/