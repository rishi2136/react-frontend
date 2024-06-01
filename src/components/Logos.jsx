export default function Logos() {
  let styles = {
    padding: "0 100px",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };
  return (
    <>
      <div style={{ width: "100%", height: "60px" }}></div>
      <div style={styles}>
        <img
          src="https://zivan-react.vercel.app/images/marketing-agency/brand_1_dark.svg"
          alt="logo1"
          style={{ margin: "6px" }}
        />
        <img
          src="https://zivan-react.vercel.app/images/marketing-agency/brand_2_dark.svg"
          alt="logo2"
          style={{ margin: "6px" }}
        />
        <img
          src="https://zivan-react.vercel.app/images/marketing-agency/brand_3_dark.svg"
          alt="logo3"
          style={{ margin: "6px" }}
        />
        <img
          src="https://zivan-react.vercel.app/images/marketing-agency/brand_4_dark.svg"
          alt="logo3"
          style={{ margin: "6px" }}
        />
      </div>
      <div style={{ width: "100%", height: "60px" }}></div>
    </>
  );
}
