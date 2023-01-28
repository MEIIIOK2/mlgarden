import React from 'react'
import {useAuthHeader} from 'react-auth-kit';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import InnerHTML from 'dangerously-set-html-content';



function Processing() {
    const authHeader = useAuthHeader()
    axios.defaults.headers.common['Authorization'] =authHeader();
    const [report, setReport] = useState()
    const {name} = useParams();
    useEffect(()=>{
        
        axios.post('http://127.0.0.1:5000/profile',{'filename':name}).then((e)=>setReport(e.data))
    },[])
    
    
    if (report) {
        return(
            <div className='pandasprofile'>
                <h1>Report</h1>
                <InnerHTML html={report}></InnerHTML>

            </div>
        )
    }
    else{
        return(
            <h1>Rendering</h1>
        )
    }
}

export default Processing;