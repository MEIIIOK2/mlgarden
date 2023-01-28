import React from 'react'
import axios from 'axios'
import { useSignIn } from 'react-auth-kit'
import {useIsAuthenticated} from 'react-auth-kit';
import {useAuthUser} from 'react-auth-kit';
import {useNavigate} from 'react-router-dom'
// import {TextField} from "@mui/material";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
    const signIn = useSignIn()
    const [formData, setFormData] = React.useState({email: '', password: ''})
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate()
    let auth = useAuthUser()
    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://77.37.166.37:5000/login', formData)
            .then((res)=>{
                console.log(res);
                if(res.status === 200){
                    if(signIn(
                        {
                            token: res.data.token,
                            expiresIn:res.data.expiresIN,
                            tokenType: "Bearer",
                            authState: res.data.authState,
                            // refreshToken: res.data.refreshToken,                    // Only if you are using refreshToken feature
                            // refreshTokenExpireIn: res.data.refreshTokenExpireIn     // Only if you are using refreshToken feature
                        }
                    )){ 
                        navigate('/')
                    }
                    else {
                        console.log('something wrong');
                    }
                }
            })
            console.log(isAuthenticated());
            console.log(auth());
    }

    return (
        // <form onSubmit={onSubmit}>
            
        //     <input type={"email"} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
        //     <input type={"password"} onChange={(e)=>setFormData({...formData, password: e.target.value})}/>

        //     <button>Submit</button>
        // </form>
        <div className='loginform' style={{top:'25%', left:'50%', position:'absolute', borderColor:'black', border:'20', width:'25%', height:'20rem'}}>
            <Form onSubmit={onSubmit}>
      
            <Form.Control type="input" placeholder="Enter email" onChange={(e)=>setFormData({...formData, email: e.target.value})} />
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setFormData({...formData, password: e.target.value})} />
        </Form.Group>
     
        <Button variant="primary" type="submit">
         Login
        </Button>
        </Form>
    </div>
    )
}

export default Login