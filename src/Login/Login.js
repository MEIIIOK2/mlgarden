import React from 'react'
import axios from 'axios'
import { useSignIn } from 'react-auth-kit'
import {useIsAuthenticated} from 'react-auth-kit';
import {useAuthUser} from 'react-auth-kit'
function Login() {
    const signIn = useSignIn()
    const [formData, setFormData] = React.useState({email: '', password: ''})
    const isAuthenticated = useIsAuthenticated()
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
                        
                    }else {
                        console.log('something wrong');
                    }
                }
            })
            console.log(isAuthenticated());
            console.log(auth().user);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type={"email"} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
            <input type={"password"} onChange={(e)=>setFormData({...formData, password: e.target.value})}/>

            <button>Submit</button>
        </form>
    )
}

export default Login