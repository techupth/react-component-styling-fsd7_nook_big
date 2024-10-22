import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button label="Button1" type="primary" />
        <Button label="Button2" type="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert message="This is an error alert box" type="error"  />
        <Alert message="This is warning alert box" type="warning" />
        <Alert message="This is info alert box" type="info" />
        <Alert message="This is an success alert box" type="success" />
      </div>
    </div>
  );
}

export default App;
