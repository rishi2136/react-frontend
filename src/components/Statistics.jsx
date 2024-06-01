import "../../public/Statistics.css";

const Statistics = () => {
  return (
    <div className="container-fluid ">
      <div className="stat-container">
        <div className=" stat-box">
          <div className="stat-data">
            <div className="stat-number">22k</div>
            <div className="my-auto stat-text">Happy customers</div>
          </div>

          <div className="my-auto line"></div>
        </div>
        <div className="  stat-box">
          <div className="stat-data">
            <div className="stat-number">15k</div>
            <div className="my-auto stat-text">Work&#39;s Completed</div>
          </div>

          <div className="my-auto line"></div>
        </div>
        <div className="  stat-box">
          <div className="stat-data">
            <div className="stat-number">121</div>
            <div className="my-auto stat-text">Skilled Team Members</div>
          </div>

          <div className="my-auto line"></div>
        </div>
        <div className=" stat-box">
          <div className="stat-data">
            <div className="stat-number">15</div>
            <div className="my-auto stat-text">Most Valuble Awards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
