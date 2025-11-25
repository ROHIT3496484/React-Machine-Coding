import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [val, setVal] = useState("");
    const [data, setData] = useState([]);

    const handleadd=()=>{
        if(val.length > 2)
        setData((prev) => [...prev, val]);
        setVal("");
    }

    const handlerm=(i)=>{
        setData((prev)=>prev.filter((_, idx)=> idx !== i));
    }

    const handleedit=(i)=>{
         setVal(data[i]);
        setData((prev)=>prev.filter((_, idx)=> idx !== i));
    }
  return (
    <div className="outer-container">
      <span>
        <input type="text" value={val} onChange={(e)=> setVal(e.target.value)} />
        <button onClick={handleadd}>Add</button>
      </span>
      <div>
        {
            data.map((v, index)=>{
                return <li key={index}>{v} <button onClick={()=> handlerm(index)}>delete</button> <button onClick={()=> handleedit(index)}>Edit</button></li>
            })
        }
      </div>

    </div>
  )
}

export default Todo
