import {handleActions} from 'redux-actions';

const defaultState={
    user:{
        name: 'Иван'
    }


}



export default handleActions({}, defaultState);