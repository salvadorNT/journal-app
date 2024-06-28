import { createSlice } from '@reduxjs/toolkit';
import { statusTypes } from './statusTypes';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: statusTypes.notAuthenticated,
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, payload) => {
            state.status = statusTypes.authenticated;
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, {payload}) => {
            state.status = statusTypes.notAuthenticated;
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = statusTypes.checking;
        },
    }
});


export const { login, logout, checkingCredentials } = authSlice.actions;