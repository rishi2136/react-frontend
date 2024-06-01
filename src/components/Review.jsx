import "../../public/Review.css";

function Review() {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide myslide">
        <div className="carousel-inner">
          <div className="carousel-item active each-carousel">
            <div className="quote">&bdquo;</div>
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates odio facilis qui odit voluptas deleniti praesentium vel
              animi quibusdam voluptatem atque est non corrupti maxime corporis,
              dolor ipsum, sunt eveniet?
            </blockquote>
            <h3>Customer 1</h3>
            <p>CEO of Delta</p>
          </div>
          <div className="carousel-item each-carousel">
            <div className="quote">&bdquo;</div>
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates odio facilis qui odit voluptas deleniti praesentium vel
              animi quibusdam voluptatem atque est non corrupti maxime corporis,
              dolor ipsum, sunt eveniet?
            </blockquote>
            <h3>Customer 2</h3>
            <p>Manager of Delta</p>
          </div>
          <div className="carousel-item each-carousel">
            <div className="quote">&bdquo;</div>
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates odio facilis qui odit voluptas deleniti praesentium vel
              animi quibusdam voluptatem atque est non corrupti maxime corporis,
              dolor ipsum, sunt eveniet?
            </blockquote>
            <h3>Customer 3</h3>
            <p>Founder of Atlas</p>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Review;
