import React from 'react'
import { useNavigate } from 'react-router-dom';
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import './Destination.css'

const Destination = () => {
    const data = [
        { image: image3, location: 'Dubai' },
        { image: image4, location: 'London'},
        { image: image5, location: 'Thailand' },
        { image: image6, location: 'Delhi' },
        { image: image5, location: 'Thailand' },
        { image: image4, location: 'London'},
        { image: image6, location: 'Delhi'},
      ];
    const navigate=useNavigate()
  return (
    <div className='destination-container'>
      <h4>Our Locations</h4>
      <p>Browse destinations for your next holiday plan</p>
      <div className="carousel-grid2">
        {data.map((entry, index) => (
          <div className="carousel-grid-item" key={index}>
            <img className="destination-image" src={entry.image} alt={entry.location} />
            <h6 className='location-name'>{entry.location}</h6>
            <p>{entry.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destination