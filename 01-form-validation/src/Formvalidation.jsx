import React, { useState } from 'react'

const Formvalidation = () => {
    const [formdata, setFormdata] = useState({
        username:"", email:"", password:"", confirmpassword:""})

    const regex = {
    username: /^[a-zA-Z0-9_]{3,15}$/,
    email: /^\S+@\S+\.\S+$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
  }

   const [errors, setErrors] = useState({});

   const validatedata =(name, value)=>{
    let err = "";
     switch(name){
        case "username":
            if(!regex.username.test(value)){
                err = "Username must be 3-15 chars (letters, numbers, underscore)";
            }  
            break;
        case "email":
            if(!regex.email.test(value)){
                err = "please use valid email"
            }
            break;
        case "password":
            if(!regex.password.test(value)){
                err = "Password should have Capital letter, small and special character"
            }
            break;
        case "confirmpassword":
            if(value !== formdata.password){
                err = "Password does not match"
            }
            break;
        }
            
        setErrors((prev)=>({...prev, [name] : err}));

     
   }

   const fields = [
    {name: "username", type : "text", placeholder: "username"},
    {name: "email", type : "email", placeholder: "email"},
    {name: "password", type : "password", placeholder: "Abc@123"},
    {name: "confirmpassword", type : "password", placeholder: "Abc@123"}
   ]

   const handlechange=(e)=>{
    const {name, value} = e.target;
    setFormdata((prev)=> ({...prev, [name]: value}))
    validatedata(name, value);
   }
    
   const handlesubmit=(e)=>{

   }

  return (
    <div className="outer-container">
        <h2 className="form-title">Form</h2>
      <div>
       <form  onSubmit={handlesubmit}>
        {fields.map((field) => (
            <div key={field.name} className="field-row">
              <label htmlFor={field.name} className="field-label">{field.name}</label>
              <input
                type={field.type}
                name={field.name}
                value={formdata[field.name]}
                onChange={handlechange}
                required
                className="form-input" />
              {
                errors[field.name] && <p className="error-text">{errors[field.name]}</p>
              }
            </div>

          ))}

          <div className="actions-row">
            <button type='submit' className='submit-btn'>Signup</button>
          </div>
       </form>
      </div>
    </div>
  )
}

export default Formvalidation
