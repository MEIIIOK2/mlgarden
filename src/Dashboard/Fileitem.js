import Button from "react-bootstrap/esm/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Fileitem.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function Fileitem(props) {
    
    

    const deleteFile =()=>{
        axios.post('http://77.37.166.37:5000/deleteuserfile',{'filename': props.filename}).then(props.update)
    }
    function humanFileSize(bytes, si=false, dp=1) {
        const thresh = si ? 1000 : 1024;
      
        if (Math.abs(bytes) < thresh) {
          return bytes + ' B';
        }
      
        const units = si 
          ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] 
          : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
        let u = -1;
        const r = 10**dp;
      
        do {
          bytes /= thresh;
          ++u;
        } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
      
      
        return bytes.toFixed(dp) + ' ' + units[u];
      }
      let navigate = useNavigate(); 
      const routeChange = () =>{ 
        let path = '/datasets/'+props.filename; 
        navigate(path);
      }
    return ( 
        <div className="Fileitem">
            
            <h4>{props.filename}</h4>
            <p>{humanFileSize (props.size)}</p>
                <ButtonGroup>
                
                <Button className = 'button' onClick={routeChange}>Choose</Button>
                <Button variant="danger" className = 'button' onClick={deleteFile}>Delete</Button>
                
                </ButtonGroup>
                
        </div>
     );
}

export default Fileitem;