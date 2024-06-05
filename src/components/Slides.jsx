import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../public/Navber.css";
import "../../public/Slides.css";
("https://images.unsplash.com/photo-1657374689601-35a4cb47b111?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

let Slides = () => {
  let [infos, setInfos] = useState([]);
  let getInfo = async () => {
    let config = {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    };
    let res = await axios.get(
      "https://react-node-backend-2.onrender.com/cabryder/service",
      config
    );
    //   let res = await axios.get("http://localhost:3000/cabryder/service", config);
    setInfos(res.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      {infos.map((info) => {
        return (
          <div className="card slider" key={uuidv4()}>
            <img
              src={info.image}
              alt=""
              style={{ [info.image_position]: "0" }}
              className="card-img"
            />
            <div
              className="card-body slide-info"
              style={{ [info.text_position]: "0" }}
            >
              <div className="card-text" style={{ color: "#fd6219" }}>
                Company Info
              </div>
              <h2 className="card-title slide-title">{info.title}</h2>
              <p className="card-text">{info.text}</p>
              <a
                href={info.video}
                className="btn start-btn mb-3"
                style={{ width: "160px" }}
              >
                Explore More
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Slides;
