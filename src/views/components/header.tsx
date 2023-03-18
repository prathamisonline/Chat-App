import "./component.scss";

import { FC, useCallback } from "react";
// import "./components.scss";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  btnActive: "login" | "signup";
};
export const Header: FC<HeaderProps> = ({ btnActive }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );
  return (
    <div className="LoginHeader">
      <div className="LoginHeader_logo">
        <h1>ChatNow</h1>
      </div>
      <div className="LoginHeader_btnContainer">
        <div className="LoginHeader_btnContainer_btn">
          <div
            className={` btn ${
              btnActive === "login" ? "LoginHeader_btn-active" : ""
            }`}
            onClick={() => handleClick("/login")}
          >
            Login
          </div>
          <div
            className={` btn ${
              btnActive === "signup" ? "LoginHeader_btn-active" : ""
            }`}
            onClick={() => handleClick("/signup")}
          >
            SignUp
          </div>
        </div>
      </div>
    </div>
  );
};
