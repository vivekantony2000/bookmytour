import React,{useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom';
import './Location.css'

const Location = ({ count, date }) => {
  const [locationValue, setLocation] = useState('');
  const [locationName, setLocationName] = useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
    const locationNames = {
      10: 'Maldives',
      20: 'Lakshadweep',
      30: 'Thailand',
  };
  setLocationName(locationNames[event.target.value] || '');
  };
  console.log(locationName);

  const data = {
    count: count,
    date: date,
    locationValue: locationName
};

  const navigate=useNavigate()

  const handleNavigation=()=>{
    navigate('/explore',{state:data})
  }
  return (
    <div style={{display:'flex'}}> 
      <div className='inner-location-container1'>
        <h4 className='location-heading'>Location</h4>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 220,marginRight:24 ,marginTop:-1}}>
          <InputLabel id="demo-simple-select-standard-label">Choose your destination</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={locationValue}
            onChange={handleChange}
            label="Location"
          >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Maldives</MenuItem>
            <MenuItem value={20}>Lakshadweep</MenuItem>
            <MenuItem value={30}>Thailand</MenuItem>
          </Select>
        </FormControl> 
      </div>
      <div className='inner-location-container2'>
        <Button variant="contained" sx={{backgroundColor:'#ff0066',marginRight:2}} onClick={handleNavigation}>Explore Now</Button>
        <Button variant="outlined" startIcon={<HistoryIcon />} sx={{borderColor:'black',color:'black'}}>History</Button>
      </div>
  </div>
  )
}

export default Location