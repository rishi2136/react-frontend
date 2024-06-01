import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../public/Banner.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "8",
        margin: "12px",
        position: "absolute",
        top: "210px",
        right: "0",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "8",
        margin: "12px",
        position: "absolute",
        top: "210px",
        left: "0",
      }}
      onClick={onClick}
    />
  );
}

function Banner() {
  let i = 0;
  let imgArray = [
    "https://images.unsplash.com/photo-1482287068671-7fb7325e1a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677564923788-87d8a222d510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1485739139909-d0d1783a7196?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1709052714435-eee4a68f1bd2?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    lazyLoad: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    customPaging: () => <div className="pagination"></div>,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="coursal-slider">
        {imgArray.map((img) => {
          return (
            <div className="image-container" key={i++}>
              <a href="/new" className="image-link">
                <img src={img} className="banner-image" />
                <div className=" text-overlay">
                  <h1>Lorem ipsum dolor sit.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                    aliquam exercitationem quae blanditiis placeat commodi
                    temporibus et qui dicta. Reiciendis.
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Banner;
