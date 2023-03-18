import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Login, SignUp } from "./views";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Login />
        <SignUp />
      </div>
    </BrowserRouter>
  );
}
