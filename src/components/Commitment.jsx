import "../../public/Commitment.css";
import "../../public/script/script.js";

const Commitment = () => {
  return (
    <div className="commit-services ">
      <p className="sub-heading container-fluid">Services</p>
      <h2 className="heading container-fluid">
        Exceeding expectations our service is our promise
      </h2>
      <div className="commit-options">
        <ul
          style={{ listStyleType: "none", color: "white" }}
          className="col-md-3 col-6 my-3 commit-card"
        >
          <li>
            <div className="img-box">
              <img
                className="icon-img"
                src="https://zivan-react.vercel.app/images/digital-agency/service_icon_1.svg"
                alt="icon-1"
              />
            </div>
            <h2 style={{ fontSize: "30px" }}>Brand Stratege</h2>
            <p style={{ color: "#a3a3a3" }}>
              Brand&#39;s strategy and insights are a forward-thinking blueprint
              for success.
            </p>
            <ul style={{ listStyleType: "none" }} className="option-list">
              <li>&minus;Business Development</li>
              <li>&minus;Research & Branding</li>
              <li>&minus;Strategy Services</li>
              <li>&minus;Business Consulting</li>
              <li>&minus;Idea Generate</li>
              <li>&minus;Search Engine Optimize</li>
            </ul>
          </li>
        </ul>

        <ul
          style={{ listStyleType: "none", color: "white" }}
          className="col-md-3 col-6 my-3 commit-card"
        >
          <li>
            <div className="img-box">
              <img
                className="icon-img"
                src="https://zivan-react.vercel.app/images/digital-agency/service_icon_2.svg
                "
                alt="icon-2"
              />
            </div>
            <h2 style={{ fontSize: "30px" }}>UI/UX Design</h2>
            <p style={{ color: "#a3a3a3" }}>
              Help reinforce your brand&#39;s identity & cultivate positive user
              behaviors.
            </p>
            <ul style={{ listStyleType: "none" }} className="option-list">
              <li>&minus; UX Research</li>
              <li>&minus;Trend Analysis</li>
              <li>&minus;A/B Testing</li>
              <li>&minus;Information Architecture</li>
              <li>&minus;Mockup Design</li>
              <li>&minus;Color Analysis</li>
            </ul>
          </li>
        </ul>

        <ul
          style={{ listStyleType: "none", color: "white" }}
          className="col-md-3 col-6 my-3 commit-card"
        >
          <li>
            <div className="img-box">
              <img
                className="icon-img"
                src="https://zivan-react.vercel.app/images/digital-agency/service_icon_3.svg
                "
                alt="icon-3"
              />
            </div>
            <h2 style={{ fontSize: "30px" }}>Animation</h2>
            <p style={{ color: "#a3a3a3" }}>
              Bringing stories to life the power of modern age animation.
            </p>
            <ul style={{ listStyleType: "none" }} className="option-list">
              <li>&minus;Idea Generate</li>
              <li>&minus;Story Writing</li>
              <li>&minus;White Board Animation</li>
              <li>&minus;Advertise Animation</li>
              <li>&minus;Video Editing</li>
            </ul>
          </li>
        </ul>

        <ul
          style={{ listStyleType: "none", color: "white" }}
          className="col-md-3 col-6 my-3 commit-card"
        >
          <li>
            <div className="img-box">
              <img
                className="icon-img"
                src="https://zivan-react.vercel.app/images/digital-agency/service_icon_4.svg"
                alt="icon-4"
              />
            </div>
            <h2 style={{ fontSize: "30px" }}>Web Development</h2>
            <p style={{ color: "#a3a3a3" }}>
              Exploring the World of Web Development in zivan digital agency.
            </p>
            <ul style={{ listStyleType: "none" }} className="option-list">
              <li>&minus;UI/UX Design`</li>
              <li>&minus;React Application`</li>
              <li>&minus;eCommerce Development`</li>
              <li>&minus;Business Website`</li>
              <li>&minus;App Development`</li>
              <li>&minus;Web Application`</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="extra-div"></div>
    </div>
  );
};

export default Commitment;
