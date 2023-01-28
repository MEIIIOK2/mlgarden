import React, {useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import {useAuthHeader} from 'react-auth-kit';
import UserFiles from "./UserFiles";
function Dashboard() {
    const authHeader = useAuthHeader()
    axios.defaults.headers.common['Authorization'] =authHeader();

    const [selectedFiles, setSelectedFiles] = useState()
    const [updatedFiles,setUpdatedFiles] = useState(false)
    const uploadFileHandler = async (e)=>{
        
        setSelectedFiles(e.target.files);
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        // console.log(Object.values(selectedFiles)[0]);
        const formData = new FormData();
        Object.values(selectedFiles).forEach(file => {
            formData.append('file',file)
        });
        // console.log(selectedFiles);
        
        axios.post('http://77.37.166.37:5000/uploadfile',formData).then((resp)=>{setUpdatedFiles(!updatedFiles);})
        
    }

    return (  
        <div>
            <h1>Upload new dataset</h1>
            <Form onSubmit={onSubmit} className='formFiller'>
                <div className='formEl'>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Choose files</Form.Label>
                        <Form.Control type="file" accept='.csv' onChange={uploadFileHandler} />
                        </Form.Group>
                        
                </div> 
                <Button type="submit">Submit</Button>


            </Form>
            <h1>Your datasets</h1>
            <UserFiles filelist ={updatedFiles} />
        </div>
    );
}

export default Dashboard;