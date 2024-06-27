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
        login: (state, action ) => {
            
        },
        logout: (state, payload ) => {
            
        },
        checkingCredentials: (state ) => {
            state.status = statusTypes.checking;
        },
    }
});


export const { login, logout, checkingCredentials } = authSlice.actions;