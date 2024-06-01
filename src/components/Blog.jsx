import { v4 as uuidv4 } from "uuid";
import "../../public/Blog.css";
import bgImg from "../../public/image/bcgImg.jpg";

export default function Blog() {
  let blogContent = [
    {
      date: "05 Mar 2023",
      text: "How to keep fear from ruining your art business with confident",
    },
    {
      date: "03 Mar 2023",
      text: "How to keep fear from ruining your art business with confident",
    },
    {
      date: "02 Mar 2023",
      text: "How to keep fear from ruining your art business with confident",
    },
  ];

  return (
    <div className="blog-section">
      <p className="sub-heading">Our Blog</p>
      <h2 className="heading">Some Recent News</h2>

      <div className="blog-post">
        <div className="highlight">
          {blogContent.map((post) => {
            return (
              <div
                className="card mb-3 border-0"
                style={{ maxWidth: "540px" }}
                key={uuidv4()}
              >
                <div className="row g-0 rounded-3">
                  <div
                    className="col-md-4 rounded-3"
                    style={{ backgroundColor: "black" }}
                  >
                    <img
                      src={bgImg}
                      className="img-fluid rounded-3 blog-img"
                      alt="image"
                    />
                  </div>
                  <div
                    className="col-md-8 "
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    <div className="card-body">
                      <p className="card-text mb-0">{post.date}</p>
                      <p className="card-text post-text">{post.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="most-recent">
          <div className="card text-bg-dark">
            <img
              src={bgImg}
              className="card-img"
              alt=""
              style={{ width: "100%", margin: " 0 12px 12px" }}
            />
            <div className="card-img-overlay embedded-text">
              <h5 className="card-text">07 Mar 2023</h5>
              <p className="card-text post-text ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
