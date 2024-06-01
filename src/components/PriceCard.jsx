import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import "../../public/PriceCard.css";
import MyBtn from "./utility/MyBtn";

const PriceCard = () => {
  let [toggle, setToggle] = useState(false);
  let handleChange = () => {
    setToggle(!toggle);
  };
  return (
    <div className="price-section">
      <p className="sub-heading">Our Pricing</p>
      <h2 className="heading">
        Offering budget friendly pricing solutions for your business
      </h2>
      <div className="plan-toggle-btn ">
        <span>Monthly</span>&nbsp;&nbsp;
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onChange={handleChange}
          />
        </div>
        &nbsp;
        <span>Yearly</span>
      </div>

      <div className="optional-plans">
        <div className="card price-card">
          <div className="card-body">
            <h2 className="price-card-title">Silver</h2>
            <div className="d-flex align-items-baseline price-box">
              {!toggle ? <h2>$399</h2> : <h2>$499</h2>}{" "}
              {!toggle ? <span>/monthly</span> : <span>/yearly</span>}
            </div>
            <p className="price-card-comment">
              Control your choices for effective business growth and more
              customers.
            </p>
            <ul className="facilities-list">
              <li>
                <FaRegCheckCircle />
                Limited content
              </li>
              <li>
                <FaRegCheckCircle />
                Ad campaign
              </li>
              <li>
                <FaRegCheckCircle />
                Branding consultancy
              </li>
              <li>
                <FaRegCheckCircle />
                Video ad banner
              </li>
            </ul>
            <a href="#" className="price-btn-conatiner">
              <MyBtn text="Choose Package" className="price-btn" />
            </a>
          </div>
        </div>

        <div className="card price-card">
          <div className="card-body">
            <h2 className="price-card-title">
              Gold
              <span
                className="badge rounded-pill"
                style={{ border: "1px solid white", fontSize: "13px" }}
              >
                Popular
              </span>
            </h2>

            <div className="d-flex align-items-baseline price-box">
              {!toggle ? <h2>$449</h2> : <h2>$649</h2>}{" "}
              {!toggle ? <span>/monthly</span> : <span>/yearly</span>}
            </div>
            <p className="price-card-comment">
              Control your choices for effective business growth and more
              customers.
            </p>
            <ul className="facilities-list">
              <li>
                <FaRegCheckCircle />
                Limited content
              </li>
              <li>
                <FaRegCheckCircle />
                Ad campaign
              </li>
              <li>
                <FaRegCheckCircle />
                Branding consultancy
              </li>
              <li>
                <FaRegCheckCircle />
                Video ad banner
              </li>
            </ul>
            <a href="#" className="price-btn-conatiner">
              <MyBtn text="Choose Package" className="price-btn" />
            </a>
          </div>
        </div>

        <div className="card price-card">
          <div className="card-body">
            <h2 className="price-card-title">Platinum</h2>
            <div className="d-flex align-items-baseline price-box">
              {!toggle ? <h2>$549</h2> : <h2>$849</h2>}{" "}
              {!toggle ? <span>/monthly</span> : <span>/yearly</span>}
            </div>
            <p className="price-card-comment">
              Control your choices for effective business growth and more
              customers.
            </p>
            <ul className="facilities-list">
              <li>
                <FaRegCheckCircle />
                Limited content
              </li>
              <li>
                <FaRegCheckCircle />
                Ad campaign
              </li>
              <li>
                <FaRegCheckCircle />
                Branding consultancy
              </li>
              <li>
                <FaRegCheckCircle />
                Video ad banner
              </li>
            </ul>
            <a href="#" className="price-btn-conatiner">
              <MyBtn text="Choose Package" className="price-btn" />
            </a>
          </div>
        </div>
      </div>
      <div className="extra-div"></div>
    </div>
  );
};

export default PriceCard;
