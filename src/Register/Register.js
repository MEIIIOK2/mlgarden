import React from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
function Register() {
    const [formData, setFormData] = React.useState({email: '', password: ''})
    const [success,setSuccess] = React.useState(false)
    let navigate = useNavigate()
    const onSubmit = (e)=>{
        
        e.preventDefault();
        axios.post('http://77.37.166.37:5000/signin', formData)
        .then((res)=>{
            if (res.status===200){
                setSuccess(true);
            }
        })
    }
    if(success){
        
        return(
            <div>
                <h1>Registered</h1>
                <button
                onClick={()=>navigate('/login')}
                >Go to login</button>
            </div>
        )
    }
    return ( 
        <form onSubmit={onSubmit}>
        <input type={"email"} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
        <input type={"password"} onChange={(e)=>setFormData({...formData, password: e.target.value})}/>
        
        <button>Submit</button>
        {success?"Registered":"Register"}
    </form>
     );
}

export default Register;