import React from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Register() {
    const [formData, setFormData] = React.useState({email: '', password: ''})
    const [success,setSuccess] = React.useState(false)
    let navigate = useNavigate()
    const onSubmit = (e)=>{
        
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/register', formData)
        .then((res)=>{
            if (res.status===200){
                setSuccess(true);
            }
        })
    }
    if(success){
        
        return(
            <div className='registerform' style={{top:'25%', left:'50%', position:'absolute', borderColor:'black', border:'20', width:'25%', height:'20rem'}}>
                <h1>Registered</h1>
                <Button
                onClick={()=>navigate('/login')}
                >Go to login</Button>
            </div>
        )
    }
    return ( 
    //     <form onSubmit={onSubmit}>
    //     <input type={"email"} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
    //     <input type={"password"} onChange={(e)=>setFormData({...formData, password: e.target.value})}/>
        
    //     <button>Submit</button>
    //     {success?"Registered":"Register"}
    // </form>
    <div className='registerform' style={{top:'25%',display:'flex' , left:'50%', position:'absolute'}}>
            <Form onSubmit={onSubmit}>
            
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setFormData({...formData, email: e.target.value})} />
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setFormData({...formData, password: e.target.value})} />
        </Form.Group>
     
        <Button variant="primary" type="submit">
         Register
        </Button>
        </Form>
    </div>
     );

}

export default Register;