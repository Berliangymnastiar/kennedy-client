import React from "react";
import { Link } from "react-router-dom";
import photoTestimonial from "../assets/images/photo-testimonials.png";
import iconStars from "../assets/images/icon-stars.png";
import merapiImage from "../assets/images/merapi-image.png";
import telukBogamImage from "../assets/images/teluk-bogam-image.png";
import bromoImage from "../assets/images/bromo-image.png";
import malioboroImage from "../assets/images/malioboro-image.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="jumbotron-fluid jumbotron-home">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>
                  Explore and <br />
                  Travel
                </h2>
                <h5>Vehicle Finder</h5>
              </div>
            </div>
            <div className="col-md-1 garis d-none d-md-block"></div>
            <div className="row">
              <div className="col-md-6 col-8">
                <form action="#">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control sm"
                      id="exampleInputEmail1"
                      placeholder="Type the vehicle (ex. motorbike"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Location</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="datetime"
                          className="form-control sm"
                          id="exampleInputEmail1"
                          placeholder="Date"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <button className="btn btn-search">Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="card-popular">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-md-10 col-12 text-center">
                <h5>Popular in town</h5>
              </div>
              <div className="col-md-2 d-none d-md-block view-all text-right">
                <Link>
                  <div href="#">View All</div>
                </Link>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-3 col-12 mt-4">
                <img src={merapiImage} className="img-fluid" alt="merapi-img" />
                <div className="row justify-content-center">
                  <div className="col-md-8 col-3 info-panel">
                    <h5 className="location text-center">Merapi</h5>
                    <p className="text-center">Yogyakarta</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-4">
                <img
                  src={telukBogamImage}
                  className="img-fluid"
                  alt="teluk-bogam-img"
                />
                <div className="row justify-content-center">
                  <div className="col-md-8 col-3 info-panel">
                    <h5 className="location text-center">Teluk Bogam</h5>
                    <p className="text-center">Kalimantan</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-4">
                <img src={bromoImage} className="img-fluid" alt="bromo-img" />
                <div className="row justify-content-center">
                  <div className="col-md-8 col-3 info-panel">
                    <h5 className="location text-center">Bromo</h5>
                    <p className="text-center">Malang</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-4">
                <img
                  src={malioboroImage}
                  className="img-fluid"
                  alt="malioboro-img"
                />
                <div className="row justify-content-center">
                  <div className="col-md-8 col-3 info-panel">
                    <h5 className="location text-center">Malioboro</h5>
                    <p className="text-center">Yogyakarta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="info-testimonials d-none d-lg-block">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-11">
                <h5>Testimonials</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 icon-stars mr-5">
                <img
                  src={iconStars}
                  className="img-fluid"
                  style={{ maxHeight: "50px" }}
                  alt="icon-stars"
                />
                <p className="word-testimonials">
                  ”It was the right decision to rent vehicle here, I spent less
                  money and enjoy the trip. It was an amazing experience to have
                  a ride for wildlife trip!”
                </p>
                <p className="name-person">Edward Newgate</p>
                <p style={{ fontSize: "18px" }}>Founder Circle</p>
              </div>
              <div className="col-md-6 photo-testimonials">
                <img
                  src={photoTestimonial}
                  alt="profile-testimonial"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="info-testimonials d-lg-none">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-11">
                <h5>Testimonials</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 photo-testimonials">
                <img
                  src={photoTestimonial}
                  alt="profile-testimonial"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 icon-stars mt-5">
                <img
                  src={iconStars}
                  className="img-fluid"
                  style={{ maxHeight: "50px" }}
                  alt="icon-stars"
                />
                <p className="word-testimonials mt-5">
                  ”It was the right decision to rent vehicle here, I spent less
                  money and enjoy the trip. It was an amazing experience to have
                  a ride for wildlife trip!”
                </p>
                <p
                  className="name-person"
                  style={{ fontWeight: "700", fontSize: "18px" }}
                >
                  Edward Newgate
                </p>
                <p style={{ fontSize: "18px" }}>Founder Circle</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
