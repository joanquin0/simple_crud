import React, { createContext, userReducer } from 'react';
import AddReducer from'./AppReducer';

const initialState = {
     user:[
          {id: 1, name: 'User One'},
          {id: 2, name: 'User Two'},
          {id: 3, name: 'User Three'}
     ]
}
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ()