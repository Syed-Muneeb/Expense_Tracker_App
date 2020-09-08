import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'


export const NewTransaction = () => {

    const [text, setText] = useState("");
    const [amount,setAmount] = useState("");

    const { addTransaction } = useContext(GlobalContext);


    function onsubmitHandler(e){

            e.preventDefault();
            console.log(text,amount);

            addTransaction({

                id : Math.floor(Math.random()*1000) +1,
                text,
                amount : +amount
            });

            setText("");
            setAmount("");
    }
    return (
        <div>
                <h4 className="borBotttom add">Add New Transaction</h4>

                <form onSubmit={onsubmitHandler}>
                    <label> Description  <br/> 
                    <input type="text" value={text} required="required"
                    placeholder="Detail of Transaction"
                    onChange={ (e)=> { setText(e.target.value) }} />
                    </label> <br/>

                    <label> Transaction Amount <br/>
                     <input type="number" value={amount} required="required"
                     placeholder="Dollar value of Transaction"

                    onChange={ (e)=> { setAmount(e.target.value) }} />
                    </label>

                    <input className="submit" type="submit" value="Add Transaction"/>
                </form>
        </div>
    )
}

