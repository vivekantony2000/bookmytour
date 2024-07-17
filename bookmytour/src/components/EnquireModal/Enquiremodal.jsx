import React,{useState} from 'react'
import { Box, Modal, Typography, TextField, Button, Divider, MenuItem, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Enquiremodal.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Enquiremodal = ({ open, handleClose }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState(null);
  const [people, setPeople] = useState('1 Adult');
  
  const peopleOptions = ['1 Adult', '2 Adults', '2 Adults + 1 Child', '3 Adults', '4 Adults'];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Booking</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6} className='textfiled-modal'>
              <Typography variant="body1">Name</Typography>
              <TextField
                fullWidth
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
                
              />
            </Grid>
            <Grid item xs={6} >
              <Typography variant="body1">Date</Typography>
              <input type='date' className='date-input-modal'/>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Phone Number</Typography>
              <TextField
                fullWidth
                placeholder="Contact Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">People</Typography>
              <TextField
                select
                fullWidth
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              >
                {peopleOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="body1">Price</Typography>
          <Typography variant="h5">₹ 12,000</Typography>
        </Box>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleClose}>
            Booking Now
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default Enquiremodal