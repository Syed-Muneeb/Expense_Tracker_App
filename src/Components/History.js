import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'


           
export const History = () => {

const { transactions } = useContext(GlobalContext);
console.log(transactions)
const { deleteTransaction } = useContext(GlobalContext);
console.log(deleteTransaction)

    return (
        <div>
            <h4  className="mar borBotttom"> History</h4>
            <ul className="list">

                {transactions.map((arr,index)=>(

                     <li className={`${arr.amount > 0 ? "cyan" : "red"}`} 
                        key={arr.id}><span>{arr.text}</span> <span> 
                             {arr.amount > 0 ? "+" : "-"} ${ Math.abs(arr.amount)}
                                </span> <button className="delete-btn"
                                   onClick={() => {deleteTransaction(arr.id)}}>  X </button>  </li>
                ))}

            </ul>
            

        </div>
    )
}

