import React from 'react'
import { useState } from 'react';
import './index.css';

const Searchandfilter = () => {
    const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, rating: 4.5 },
    { id: 2, name: "T-Shirt", category: "Clothing", price: 500, rating: 4.0 },
    { id: 3, name: "Sneakers", category: "Footwear", price: 2500, rating: 4.4 },
    { id: 4, name: "Coffee Mug", category: "Kitchen", price: 300, rating: 4.1 },
    { id: 5, name: "Headphones", category: "Electronics", price: 1500, rating: 4.3 }
  ];

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All")
    const [rating, setRating] = useState("All")
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(500000);
   
  
    const filtereddata = products.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase())) 
    .filter((item)=>  category === "All"|| item.category === category)
    .filter((item) => rating === "All" || Math.floor(item.rating) === Number(rating) )
    .filter((item)=> item.price >= min && item.price <=max)

    

  return (
    <div>
        <div><h1>Search and Filter</h1></div>
      <input type="text" value={search}  onChange={(e)=>setSearch(e.target.value)}/>

      <select  value={category} name="category" onChange={(e)=>setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Footwear">Footwear</option>
        <option value="Kitchen">Kitchen</option>
      </select>
     <div> <h4>Ratings:</h4>
        <select value ={rating} onChange={(e)=> setRating(e.target.value)}>
        <option value="All">All</option>
        <option value="1" > 1 </option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
     </div>
      
      <div className="Tiles" >
        {
           filtereddata.length > 0 ? (filtereddata.map((mp)=>(
             <div key={mp.id} className="tile-item">
               <strong>{mp.name}</strong>
               <div>{mp.category}</div>
               <div>{mp.price}</div>
               <div>{mp.rating}</div>
            </div>
          ))):(
            <p>No file</p>
          )
        }
       
      </div>
    </div>
  )
}

export default Searchandfilter
