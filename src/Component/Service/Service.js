import React from 'react';
import { useState, useEffect } from 'react';
import { ButtonGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {


  // const instrctor = JSON.parse(data);
  // console.log(data);
  const [instrctor, setinstrctor] = useState([]);
  useEffect(() => {
    fetch('./healthcare.json')
      .then(res => res.json())
      .then(data => setinstrctor(data))

  }, [])


  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap " >


      {
        instrctor?.map(instrc => <Card className="shadow rounded" style={{ width: '18rem', margin: '20px' }}>
          <Card.Img variant="top" src={instrc.img} />
          <Card.Body>
            <Card.Title >Category: <span>{instrc.name}</span></Card.Title>
            <Card.Text><h4><span>Service</span> : {instrc.category} </h4></Card.Text>
            <p class="card-text">Service : <span><i class="far fa-clock"></i></span> {instrc.duration}</p>

            <Card.Text>Service Area: {instrc.home}</Card.Text>


            <Link to={`/orderreview/${instrc.key}`}>


              <Button className="button" >
                <i class="fas fa-cart-plus"></i> Add to Cart</Button></Link>


          </Card.Body>
        </Card>)
      }

    </div >
  );
};

export default Service;