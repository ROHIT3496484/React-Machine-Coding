import React from 'react'
import products from './Products'
import { useState } from 'react'

const Sortfuncn = () => {
    const [sorted, setSorted] = useState("");
    const [data, setData] = useState(products);

    
    const sortfunc=(value)=>{
        setSorted(value);
        let sortedarr = [...products];
        if(value === "Low to High"){
            sortedarr.sort((a,b)=> a.price - b.price)
        }
        else if( value === "High to Low"){
            sortedarr.sort((a, b)=> b.price - a.price);
        }
        setData(sortedarr);
    }
    
    
     
  return (
    <div>
        <h1>Sorting Feature</h1>
        <select value = {sorted} onChange={(e)=> sortfunc(e.target.value)}>
            <option value="Sort By Price">Sort By Price</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
        </select>
        <div className="Tiles">
                {
                    data.map((mp)=>(
                        <div className="Tiles-item" key={mp.id}>
                            <h6>{mp.name}</h6>
                        <p>
                            Price: {mp.price}
                        </p>
                        </div>  
                    )
                        
                    )
                }

        </div>
      
    </div>
  )
}

export default Sortfuncn;
