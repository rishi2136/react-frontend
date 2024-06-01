import { CiFacebook } from "react-icons/ci";
import { SlSocialYoutube } from "react-icons/sl";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import "../../public/Footer.css";

export default function Footer() {
  let Services = [
    "WP Development",
    "UX Research",
    "Branding Design",
    "Front-End Development",
    "Graphics Design",
    "Ad Promotion",
  ];
  let Links = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

  return (
    <div className="footer-section">
      <div className="footer-body">
        <ul className="col-lg-3 col-sm-6">
          <img
            src="https://zivan-react.vercel.app/images/logo_white.svg"
            alt="company-logo"
            style={{ height: "16px" }}
          />
          <li>5553 Jay Path Apt. 908</li>
          <li>+44 454 7800 112</li>
          <li>info@zivan.net</li>
        </ul>
        <ul className="col-lg-3 col-sm-6">
          <h4>Services</h4>
          {Services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <ul className="col-lg-3 col-sm-6">
          <h4>Links</h4>
          {Links.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
        <div className="col-lg-3 col-sm-6">
          <h4></h4>
          <p></p>
          <div
            className="input-group  col-2-lg col-4"
            style={{ width: "240px" }}
          >
            <h4>Subscribe Newletter</h4>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              atque?
            </p>
            <input
              className="form-control email-input"
              type="text"
              placeholder="Email address"
              aria-label="form-control-lg example"
            ></input>
            <button className="btn rounded-3 submit-btn my-2">Submit</button>
          </div>
        </div>
      </div>
      <hr style={{ color: "white" }} />
      <div className="footer-bottom">
        <div>
          <a href="">
            <TiSocialLinkedinCircular className="social-icon" />
          </a>
          <a href="">
            <TiSocialTwitterCircular className="social-icon" />
          </a>
          <a href="">
            <SlSocialYoutube className="social-icon" />
          </a>
          <a href="">
            <CiFacebook className="social-icon" />
          </a>
        </div>
        <div>Copyright &#169; 2023 Laralink.</div>
        <div>
          <a href="33">Terms of Use</a> | <a href="33">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
