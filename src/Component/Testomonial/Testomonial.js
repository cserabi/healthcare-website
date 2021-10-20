import React from 'react';
import './Testomonial.css';

const Testomonial = () => {
  return (
    <div>
      <h2 className="experience-client m-3" >Experience with our Clients</h2>
      <div className="conatainer-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src="https://i.postimg.cc/FRPRQsRr/viktor-forgacs-a-PC8ygu3b-WA-unsplash.jpg" class="d-block w-100 roundedbg" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <img src="https://i.postimg.cc/KvRV8NqW/profile.jpg" class=" w-50 ms-4 text-center customImage" alt="..." />
                    <h4>Md Rabiul Islam</h4>
                    <div className="review">(5)<i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>

                    </div>
                    <p>“ This is the best place where i get found my father medicine.Thank you Healthcare. ”</p>
                    <h6>Sirajgonj City</h6>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="https://i.postimg.cc/FRPRQsRr/viktor-forgacs-a-PC8ygu3b-WA-unsplash.jpg" class="d-block w-100 roundedbg" alt="..." />


                  <div class="carousel-caption d-none d-md-block">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51CsDxe7mKL._SX450_.jpg" class=" w-50 ms-4 text-center customImage" alt="..." />
                    <h4>Jhankar Mahbub</h4>
                    <div className="review">(5)<i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>

                    </div>
                    <p>“ Healthcare is really amazing .Really Satisfied .Special thank to Dr Md Rabiul islam ”</p>
                    <h6>New York City</h6>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://i.postimg.cc/FRPRQsRr/viktor-forgacs-a-PC8ygu3b-WA-unsplash.jpg" class="d-block w-100 roundedbg" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <img src="https://pbs.twimg.com/profile_images/1313143643398721537/29J0U2P_.jpg" class=" w-50 ms-4 text-center customImage" alt="..." />
                    <h4>Anisul Islam</h4>
                    <div className="review">(5)<i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>

                    </div>
                    <p>“ I have taken medical service from healthcare.They are really helpful .Highly recommended. ”</p>
                    <h6>Sylhet City</h6>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>
          <div className=" col-md-2"></div>
        </div>

      </div>

    </div>
  );
};

export default Testomonial;