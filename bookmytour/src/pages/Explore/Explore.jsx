import React,{useState} from 'react'
import Header from '../../components/header/Header'
import { Container, Row, Col, Form, Button, Pagination } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Explore.css'

const Explore = () => {
  const location= useLocation()
  const { count, date, locationValue } = location.state; 
  const cardData = [
    {
      image: 'https://www.gingerhotels.com/resourcefiles/blogsmallimages/famous-attractions-to-visit-in-kochi-in-one-day.jpg',
      badge: 'Promo Deals',
      date: '12 Nov 2024',
      title: 'Fastaaa Boat Ticket - Gilimanuk and Nusa Penida',
      price: '₹ 40 Starting From',
      location: 'Maldives',
    },
    {
      image: 'https://www.gingerhotels.com/resourcefiles/blogsmallimages/famous-attractions-to-visit-in-kochi-in-one-day.jpg',
      badge: 'Promo Deals',
      date: '12 Nov 2024',
      title: 'Resort 2',
      price: '₹ 40 Starting From',
      location: 'Maldives',
    },
    {
      image: 'https://www.gingerhotels.com/resourcefiles/blogsmallimages/famous-attractions-to-visit-in-kochi-in-one-day.jpg',
      badge: 'Promo Deals',
      date: '12 Nov 2024',
      title: 'Resort 3',
      price: '₹ 40 Starting From',
      location: 'Lakshadweep',
    },
    {
      image: 'https://www.gingerhotels.com/resourcefiles/blogsmallimages/famous-attractions-to-visit-in-kochi-in-one-day.jpg',
      badge: 'Promo Deals',
      date: '12 Nov 2024',
      title: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      price: '₹ 40 Starting From',
      location: 'Lakshadweep',
    },
    {
      image: 'https://www.gingerhotels.com/resourcefiles/blogsmallimages/famous-attractions-to-visit-in-kochi-in-one-day.jpg',
      badge: 'Promo Deals',
      date: '12 Nov 2024',
      title: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      price: '₹ 40 Starting From',
      location: 'Maldives',
    },
    {
      image: 'https://www.gingerhotels.com/resourcefiles/blogsmallimages/famous-attractions-to-visit-in-kochi-in-one-day.jpg',
      badge: 'Promo Deals',
      date: '12 Nov 2024',
      title: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      price: '₹ 40 Starting From',
      location: 'Thailand',
    },
    {
      image: 'https://www.gingerhotels.com/resourcefiles/blogsmallimages/famous-attractions-to-visit-in-kochi-in-one-day.jpg',
      badge: 'Promo Deals',
      date: '12 Nov 2024',
      title: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      price: '₹ 40 Starting From',
      location: 'Lakshadweep',
    },
    {
      image: 'https://www.gingerhotels.com/resourcefiles/blogsmallimages/famous-attractions-to-visit-in-kochi-in-one-day.jpg',
      badge: 'Promo Deals',
      date: '12 Nov 2024',
      title: 'Fast Boat Ticket - Gilimanuk and Nusa Penida',
      price: '₹ 40 Starting From',
      location: 'Thailand',
    },
    {
      image: 'https://www.gingerhotels.com/resourcefiles/blogsmallimages/famous-attractions-to-visit-in-kochi-in-one-day.jpg',
      badge: 'Promo Deals',
      date: '12 Nov 2024',
      title: 'Fastaaa Boat Ticket - Gilimanuk and Nusa Penida',
      price: '₹ 40 Starting From',
      location: 'Maldives',
    }
  ];
const filteredCardData = locationValue
    ? cardData.filter(item => item.location === locationValue)
    : cardData;
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCardData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cardData.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className='explore-container'>
        <div className='vignette'></div>
        <Header />
        <h1 className="explore-heading">Location</h1>
      </div>  
      <Container>
      <Form className="search-bar">
        <div className="search-input-container">
          <Form.Control type="text" placeholder="Search activities or Destinations" />
        </div>
        <Button variant="danger" className="search-button">
          <i className="fas fa-search"></i> Search
        </Button>
      </Form>
        <Row>
          <Col md={3}>
            <div className="filters">
              <h4>Filters</h4>
              <Button variant="secondary" className="reset-button">Reset</Button>
              <div className="filter-section">
                <h5>Category</h5>
                <Form.Check type="checkbox" label="Promo Deals" />
                <Form.Check type="checkbox" label="One Day Trip" />
                <Form.Check type="checkbox" label="Top Vacation" />
                <Form.Check type="checkbox" label="Things To do" />
              </div>
              <div className="filter-section">
                <h5>Price Range</h5>
                <Form.Control type="text" placeholder="Minimum Price" />
                <Form.Control type="text" placeholder="Maximum Price" />
              </div>
              <div className="filter-section">
                <h5>Date</h5>
                <Form.Control type="date" placeholder="DD/MM/YYYY" />
              </div>
            </div>
          </Col>
          <Col md={9}>
            <Row>
            {currentCards.map((card, index) => (
                <Col md={4} key={index}>
                  <div className="card">
                    <img
                      className="card-image"
                      src={card.image}
                      alt="Destination"
                    />
                    <div className="card-content">
                      <span className="badge">{card.badge}</span>
                      <span className="date">{card.date}</span>
                      <h5>{card.title}</h5>
                      <p>{card.price}</p>
                      <p>{card.location}</p>
                      <Button variant="outline-danger">Enquire Now</Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Pagination>
              {pageNumbers.map(number => (
                <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                  {number}
                </Pagination.Item>
              ))}
            </Pagination>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Explore