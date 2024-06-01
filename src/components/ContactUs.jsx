import MyBtn from "./utility/MyBtn";

export default function ContactUs() {
  let styles = {
    color: "white",
    padding: "135px 180px",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    // background: "linear-gradient(267.18deg, #161616, #080808)",
    // backgroundImage: { bgImg },
  };
  let headStyle = {
    fontSize: "46px",
  };
  return (
    <div style={styles}>
      <h2 style={headStyle}>
        Is there a specific project or goal that you have in mind?
      </h2>
      <MyBtn text={"Contact Us"} style={{ margin: "auto" }} />
    </div>
  );
}
