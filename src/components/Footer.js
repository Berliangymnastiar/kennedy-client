import iconNavbar from "../assets/images/icon-footer.png";
import iconTwitter from "../assets/images/icon-twitter.png";
import iconFacebook from "../assets/images/icon-facebook.png";
import iconInstagram from "../assets/images/icon-instragram.png";
import iconLinkedin from "../assets/images/icon-linkedin.png";
import iconYoutube from "../assets/images/icon-youtube.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            <img src={iconNavbar} className="img-fluid" alt="icon-navbar" />
            <p>
              Plan and book your perfect trip with <br />
              expert advice, travel tips for vehicle <br />
              information from us
            </p>
            <p className="text-copyright">
              ©2020 Vehicle Rental Center. All rights reserved
            </p>
          </div>
          <div className="col-md-3 col-8 text-destinations text-left">
            <h5>Destinations</h5>
            <p>Bali</p>
            <p>Yogyakarta</p>
            <p>Jakarta</p>
            <p>Kalimantan</p>
            <p>Malang</p>
          </div>
          <div className="col-md-3 col-4 text-vehicle">
            <h5>Vehicle</h5>
            <p>Bike</p>
            <p>Cars</p>
            <p>Motorbike</p>
            <p>Return Times</p>
            <p>FAQs</p>
          </div>
          <div className="col-md-3 col-12 text-interests">
            <h5>Interests</h5>
            <p>Adventure Travel</p>
            <p>Art And Culture</p>
            <p>Wildlife And Nature</p>
            <p>Family Holidays</p>
            <p>Culinary Trip</p>
          </div>
        </div>
        <div className="row icon-sosmed text-center">
          <div className="col-12">
            <img src={iconTwitter} className="mr-3 ml-3" alt="icon-twitter" />
            <img src={iconFacebook} className="mr-3 ml-3" alt="icon-facebook" />
            <img
              src={iconInstagram}
              className="mr-3 ml-3"
              alt="icon-instagram"
            />
            <img src={iconLinkedin} className="mr-3 ml-3" alt="icon-linkedin" />
            <img src={iconYoutube} className="mr-3 ml-3" alt="icon-youtube" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
