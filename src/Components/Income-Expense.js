import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const IncomeExpense = () => {

const {transactions} = useContext(GlobalContext);

const income = transactions.filter((arr) => (arr.amount>0))
            .reduce((total,arr)=>(total+=arr.amount),0).toFixed(2)

const expense = transactions.filter((arr) => (arr.amount<0))
            .reduce((total,arr)=>(total+=arr.amount),0).toFixed(2)

    return (
        <div className="inc-exp-container">
                <span>
                    <p className="mar">INCOME</p>
                    <p className="mar inc">+$ {income}</p>
                </span>
                <span>
                    <p className="mar">EXPENSE</p>
                    <p className="mar exp"> -$ {Math.abs(expense).toFixed(2)}</p>
                </span>
        </div>
    )
}

