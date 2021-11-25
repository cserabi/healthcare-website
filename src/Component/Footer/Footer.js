import React from 'react';
import { Link, Router } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div>

      <div className="container bg-light shadow">

        <div className="row">
          <div className="col-md-3 bg-light shadow ">
            <div className="icon-size">


              <i class="fab fa-facebook-square fa-2x"></i>

              <i class="fab fa-instagram-square fa-2x"></i>
              <i class="fab fa-twitter-square fa-2x"></i>
              <i class="fab fa-pinterest-square fa-2x"></i>
            </div>
          </div>
          <div className="col-md-3 bg-light shadow p-2">
            <h5>  Healthcare Network</h5>
            <p>

              Healthcare<br />
              Healthcare Reference<br />
              HealthcareNet<br />
              eMedicineHealth<br />
              RxList for healthcare<br />
              OnHealth<br />
              WebMDRx<br />
              First Aid<br />
              Healthcare Magazine<br />
              Healthcare Health Record<br />
              Dictionary<br />
              Physician Directory
            </p>
          </div>
          <div className="col-md-3 bg-light shadow p-2">

            <h5>  Policies</h5>
            <p>

              Privacy Policy<br />
              Cookie Policy<br />
              Editorial Policy<br />
              Advertising Policy<br />
              Correction Policy<br />
              Terms of Use
            </p>

          </div>

          <div className="col-md-3 bg-light shadow p-2">


            <h5>Our Apps</h5>
            <p>
              Healthcare Mobile<br />
              Healthcare App<br />
              Pregnancy<br />
              Baby<br />
              Allergy<br />
              Medscape</p><br />
            <h5>For Advertisers</h5>
            <p>
              Advertise with Us<br />
              Advertising Policy
            </p>
          </div>

        </div>
      </div>
      <div className="footer-low">All cradits goes to Healthcare @2021 reserved.</div>
    </div>
  );
};

export default Footer;