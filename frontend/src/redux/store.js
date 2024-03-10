// store.js
import {createStore} from 'redux';

const initialState = {
    mode: 'mars',
    userName: 'Господин Эдуард',
    reportContent: '',
    file: null,
    isLoading: true,
    token: '',
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
        case 'SET_TOKEN':
            return { ...state, token: action.token };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
