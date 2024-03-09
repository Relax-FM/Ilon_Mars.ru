// store.js
import {createStore} from 'redux';

const initialState = {
    mode: 'earth',
    userName: 'Господин Эдуард',
    reportContent: '',
    file: null,
    isLoading: true,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_MODE':
            return { ...state, mode: action.mode };
        case 'SET_USER_NAME':
            return { ...state, userName: action.name };
        case 'SET_REPORT_CONTENT':
            return { ...state, reportContent: action.content };
        case 'SET_FILE':
            return { ...state, file: action.file };
        case 'SET_LOADING':
            return { ...state, isLoading: action.loading };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
