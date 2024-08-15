const outerDivStyle = {
  border: "1px solid gray",
  borderRadius: "5px",
  backgroundColor: "white",
  "--tw-shadow":
    "1px 3px 3px 0 rgb(0 0 0 / 0.7), 1px 3px 2px -1px rgb(0 0 0 / 0.7)",
  "--tw-shadow-colored":
    "1px 3px 3px 0 var(--tw-shadow-color), 1px 3px 2px -1px var(--tw-shadow-color)",
  boxShadow:
    "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  margin: "10px",
  padding: "20px",
  lineHeight: "2",
};

const titleDefaultStyle = {
  fontWeight: "bold",
  fontSize: "18px",
};

function PanelText({ title, children, titleStyle }) {
  return (
    <div style={outerDivStyle}>
      <label style={{ ...titleDefaultStyle, ...titleStyle }}>{title}</label>
      {children}
    </div>
  );
}

export default PanelText;
