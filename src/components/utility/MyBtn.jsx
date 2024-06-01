export default function MyBtn({ sizeLimit, text }) {
  return (
    <button
      type="button"
      className="btn start-btn"
      style={{ display: sizeLimit && "none" }}
    >
      {text}
    </button>
  );
}
