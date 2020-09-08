import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initial = {

    transactions : []
}

export const GlobalContext = createContext(initial);

export const GlobalProvider = ({children})=>{

const [state, dispatch] = useReducer(AppReducer,initial);

    function addTransaction(payload){

        dispatch({ type:"ADD_TRANSACTION" , payload })
    }
    function deleteTransaction(id){

        dispatch({type:"DELETE_TRANSACTION" , payload : id})
    }

    return <div>

            <GlobalContext.Provider value={{
                transactions : state.transactions ,
                addTransaction,
                deleteTransaction
                }}>
                {children}
            </GlobalContext.Provider>
    </div>
}
