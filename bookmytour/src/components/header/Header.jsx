import React from 'react'
import Button from '@mui/material/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

const Header = () => {
    const navigate=useNavigate();
  return (
    <div>
        <div className='headercontainer'>
            <img src={image1} style={{height:'45px',marginTop:'10px'}}/>
            <div className='inner-header-container2'>
                <button className='buttonstyle' onClick={()=>{navigate('/')}}>Home</button>
                <button className='buttonstyle'>Packages</button>
                <button className='buttonstyle'>Categories</button>
                <button className='buttonstyle'>Blogs</button>
            </div>
            <div className='inner-header-container3'>
                <div>
                    <Button variant="contained" sx={{marginLeft:'50px'}}>Contact us</Button>
                </div>
                <div style={{marginLeft:'50px'}}>
                    <DropdownButton id="dropdown-basic-button" title="EN" style={{backgroundColor:'black',color:'white'}}>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Header