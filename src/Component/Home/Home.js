import React from 'react';
import { Carousel } from 'react-bootstrap';
import ContactUs from '../ContactUs/ContactUs';
import FAQ from '../FAQ/FAQ';
import OrderReview from '../OrderReview/OrderReview';
import Service from '../Service/Service';
import Testomonial from '../Testomonial/Testomonial';
import './Home.css';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">


        <div className="col-md-12">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/cJKJRN46/image-3.jpg"
                alt="First slide"
              />
              <Carousel.Caption className="Custom-design shadow">
                <h2><i class="fas fa-hospital" ></i> Health Care</h2>
                <h4>Your Trusted Medical Agency</h4>
              </Carousel.Caption>



            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/c49ZX5z3/image-1.jpg"
                alt="Second slide"
              />
              <Carousel.Caption className="Custom-design shadow">
                <h2><i class="fas fa-phone-volume"></i> Call Us</h2>
                <h4>01792181248</h4>
              </Carousel.Caption>


            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/Gm4RNx05/image-2.jpg"
                alt="Third slide"
              />
              <Carousel.Caption className="Custom-design shadow">
                <h2><i class="fas fa-ambulance"></i> Hire Ambulance</h2>
                <h4> Medical Ambulance </h4>
              </Carousel.Caption>

            </Carousel.Item>
          </Carousel>

        </div>
      </div>

      <Service></Service>
      <OrderReview></OrderReview>
      <FAQ></FAQ>
      <Testomonial></Testomonial>

      <ContactUs></ContactUs>


    </div>
  );
};

export default Home;