import React,{useState} from 'react'
import { Carousel} from 'react-bootstrap';
import './Tourpackage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import Enquiremodal from '../EnquireModal/Enquiremodal';


const Tourpackage = () => {
  const data = [
    {
        id: 1,
        entries: [
            { image: 'https://www.gingerhotels.com/resourcefiles/blogsmallimages/famous-attractions-to-visit-in-kochi-in-one-day.jpg', location: 'Athirampally Waterfalls', price: 'Rs.10,000' },
            { image: 'https://www.fabhotels.com/blog/wp-content/uploads/2024/01/bbec4647-lakshadweep-1.jpg', location: 'Lakshadweep', price: 'Rs.70,000' },
            { image: 'https://assets-news.housing.com/news/wp-content/uploads/2022/07/21152615/MALDIVES-FEATURE-compressed.jpg', location: 'Maldives', price: 'Rs.1,20,000' }
        ]
    },
    {
        id: 2,
        entries: [
            { image: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Taj-Mahal-Agra-feature.jpg', location: 'Taj Mahal', price: 'Rs. 25,000' },
            { image: 'https://www.usnews.com/object/image/00000163-8d5b-d398-ad7f-8dfff5760000/3-eiffel-tower-getty.jpg?update-time=1527086483519&size=responsive640', location: 'Paris', price: 'Rs.3,00,000' },
            { image: 'https://irisholidays.com/keralatourism/wp-content/uploads/2019/03/best-places-to-visit-in-kochi-1024x576.jpg', location: 'Kochi', price: 'Rs.7,000' }
        ]
    }

];

const [index, setIndex] = useState(0);
const [open, setOpen] = useState(false);
const handleOpenModal = () => setOpen(true);
const handleCloseModal = () => setOpen(false);

const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};

return (
    <div style={{ marginTop: '30px',padding:'40px' }}>
      <h2>Top Tour Package</h2>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div className="carousel-grid">
              {slide.entries.map((entry, entryIdx) => (
                <div className="carousel-grid-item1" key={entryIdx}>
                  <img
                    className="location-image1"
                    src={entry.image}
                    alt={`Slide ${slide.id}-${entryIdx}`}
                  />
                  <h5 style={{textAlign:'left',fontWeight:'500'}}>{entry.location}</h5>
                  <p>{entry.price}</p>
                  <Button variant="outlined" onClick={handleOpenModal} sx={{color:'#ff0066',borderColor:'#ff0066',width:'140px',borderRadius:'none'}}>Enquire Now</Button>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Enquiremodal open={open} handleClose={handleCloseModal} />
    </div>
  )
}

export default Tourpackage