import { Footer, Header } from "../components";
import { SignUpComponent } from "./component";

export const SignUp = () => {
  return (
    <div className="signup-container">
      <Header btnActive={"signup"} />
      <SignUpComponent />
      <Footer />
    </div>
  );
};
