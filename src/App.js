import React from 'react';
import './App.css';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { IncomeExpense } from './Components/Income-Expense';
import { History } from './Components/History';
import { NewTransaction } from './Components/NewTransaction'

import { GlobalProvider } from "./context/GlobalContext"




function App() {
  return (
    <GlobalProvider>
            <Header/>
        <div className="container">
            <Balance/>
            <IncomeExpense/>
            <History/>
            <NewTransaction/>
            
        </div>
    </GlobalProvider>
  );
}

export default App;
