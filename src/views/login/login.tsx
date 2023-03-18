import { Header, Footer } from "../components";
import "./login.scss";

import { LoginComponent } from "./components";

export const Login = () => {
  return (
    <div className="login-container">
      <Header btnActive={"login"} />
      <LoginComponent />
      <Footer />
    </div>
  );
};
