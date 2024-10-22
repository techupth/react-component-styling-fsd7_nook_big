import { Frown } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { CircleAlert } from "lucide-react";
import { CircleCheckBig } from "lucide-react";

const alertStyles = {
  error: {
    backgroundColor: "#F9C8C8",
    color: "#444444",
    fontSize: "20px",
    fontWeight: "bold",
    width: "650px",
    height: "76px",
    padding: "10px 20px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  warning: {
    backgroundColor: "#F9D9C8",
    color: "#444444",
    fontSize: "20px",
    fontWeight: "bold",
    width: "650px",
    height: "76px",
    padding: "10px 20px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  info: {
    backgroundColor: "#F9EBC8",
    color: "#444444",
    fontSize: "20px",
    fontWeight: "bold",
    width: "650px",
    height: "76px",
    padding: "10px 20px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  success: {
    backgroundColor: "#CEF7CD",
    color: "#444444",
    fontSize: "20px",
    fontWeight: "bold",
    width: "650px",
    height: "76px",
    padding: "10px 20px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
};

function Alert({message, type}) {
    return (
      <div style={alertStyles[type]}>
        {type === "error" && <Frown style={{ color:"#ED5050"}} />}
        {type === "warning" && <TriangleAlert style={{ color:"#EA712D"}} />}
        {type === "info" && <CircleAlert style={{ color:"#F29811"}} />}
        {type === "success" && <CircleCheckBig style={{ color:"#14944F"}} />}
        <span>{message}</span>
      </div>
    );
}
export default Alert;