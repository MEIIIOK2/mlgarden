import axios from "axios";
import React,{useEffect, useState} from "react";
import Fileitem from "./Fileitem";
import './Fileitem.css';
function UserFiles(props) {


    const [files,setFiles] = useState([])
    const getFileList = ()=>{
        axios.get('http://77.37.166.37:5000/getuserfiles').then((e)=>setFiles(e.data))
    }  
    

    
    useEffect(()=>{
        getFileList();
        
    },[props.filelist])
    
    return ( 
        <div className="Items">
            
            {files.map(
                (f,indx)=>
                
                <Fileitem  key={indx} {...f} update = {getFileList}/>
                
            )}
        </div>

     );
}

export default UserFiles;