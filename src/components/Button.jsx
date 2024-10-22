
const style = {
  primary: {
    backgroundColor: "#074EE8",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    marginBottom: "10px",
  },
  secondary: {
    backgroundColor: "#07A4E8",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    marginBottom: "10px",
  },
};

function Button({ label, type}) {
  return (
    
    <button style={type === "primary" ? style.primary : style.secondary}>
      {label}
    </button>
  );
}

export default Button;