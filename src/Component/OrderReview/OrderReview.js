import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const OrderReview = () => {

  const { key } = useParams();
  console.log(key);

  const [instrctors, setinstrctors] = useState([]);
  const [identity, setIdentity] = useState({});
  useEffect(() => {
    fetch('/healthcare.json')
      .then(res => res.json())
      .then(data => setinstrctors(data))

  }, [])

  useEffect(() => {
    const foundkeyService = instrctors.find(instrctor => instrctor.key === key) || {}

    setIdentity(foundkeyService);

  }, [instrctors])


  console.log(identity);

  return (
    <div>


      <div className="container">
        <div className="row">
          <div className="col-md-3">

          </div>
          <div className="col-md-6 shadow my-4">
            <h5 className="text-dark">Thank you for order.You have selected service number {key}</h5>
            <h3>{identity?.category}</h3>
            <img style={{ width: '400px' }} src={identity?.img} alt="profile" />
            <h4>Duration: {identity?.duration}</h4>

            <Button className="my-3">Process your order </Button>
          </div>
          <div className="col-md-3">

          </div>

        </div>

      </div>

    </div>
  );
};

export default OrderReview;