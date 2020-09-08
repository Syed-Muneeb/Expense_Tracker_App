import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const Balance = () => {

const { transactions } = useContext(GlobalContext);

console.log(transactions);

let Balance = transactions.reduce((total,arr)=>(total+=arr.amount),0).toFixed(2)
console.log(Balance)
    return (
        <div className="balance">
            <h4 className="mar">Current Balance </h4>
            <p className="mar2"> $ {Balance} </p>
        </div>
    )
}
