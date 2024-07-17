import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Datecomponent from '../../components/Date/Datecomponent';
import Location from '../../components/Location/Location';
import Header from '../../components/header/Header';
import Tourpackage from '../../components/Tourpackage/Tourpackage';
import Destination from '../../components/Destinations/Destination';
import Footer from '../../components/Footer/Footer';
import './Home.css'

const Homepage = () => {
  const [number,setNumber]=useState(12)
  const [date, setDate] = useState(null);

  const increaseNumber = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const decreaseNumber = () => {
    setNumber(prevNumber => Math.max(prevNumber - 1, 0)); 
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  const navigate=useNavigate()
  return (
    <div>
      <div className='homecontainer'>
        <Header />
        <div className='Explorecontainer'>    
          <div className='sentence-box'>
            <h2 className='home-sentence1'>Get New Experience and Greatest Adventure</h2>
            <h4 className='home-sentence2'>Explore all corners of the world with us at a better price</h4>
          </div>
          <div className='inner-container-home'>
            <div className='people-container'>
              <h4>People</h4>
              <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    bgcolor: 'background.paper',
                    color: 'text.secondary',
                      '& svg': {
                        m: 1,
                      },
                      '& hr': {
                        mx: 0.5,
                      },
                    }}
                >
                  <div><button className='buttonstyle1' onClick={decreaseNumber}>-</button></div>
                  <Divider orientation="vertical" flexItem sx={{borderColor:'1px solid'}}/>
                  <div>{number}</div>
                  <Divider orientation="vertical" flexItem />
                  <div><button className='buttonstyle1' onClick={increaseNumber}>+</button></div>
              </Box>
              <p>How many people including kids</p>
            </div>
            <Divider orientation="vertical" flexItem sx={{ borderColor: 'black' }}/>
            <div>
              <Datecomponent onDateChange={handleDateChange}/>
            </div>
            <Divider orientation="vertical" flexItem sx={{ borderColor: 'black' }}/>
            <div>
              <Location count={number} date={date}/>
            </div>     
          </div>   
        </div>
      </div>
      <Tourpackage />
      <div>
        <Destination />
      </div>
    <Footer />
    </div>
  )
}

export default Homepage