import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../../public/Navber.css";
import MyBtn from "./utility/MyBtn";
import ToggleBtn from "./utility/ToggleBtn";

const Navber = () => {
  let [width, setWidth] = useState(window.innerWidth);
  let sizeLimit = width <= 1000;
  let navOption = [
    "Home",
    "About",
    "Service",
    "Blog",
    "Shop",
    "Pages",
    "Contect",
  ];

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark sticky-top nav-holder"
        data-bs-theme="dark"
      >
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img
              src="https://zivan-react.vercel.app/images/logo_white.svg"
              alt="company logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            style={{ zIndex: "5" }}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto ">
              {navOption.map((option) => {
                return (
                  <li className="nav-item" key={option}>
                    <a
                      className="nav-link d-flex justify-content-between"
                      aria-current="page"
                      href="#"
                    >
                      <div className="text-link ">
                        {option}
                        <FaChevronDown className="dropdown-icon" />
                      </div>

                      {sizeLimit && <ToggleBtn />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <MyBtn sizeLimit={sizeLimit} text="Getting Started" />
        </div>
      </nav>
    </>
  );
};

export default Navber;
