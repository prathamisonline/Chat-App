import "./component.scss";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="AuthFooter">
      {/* <div className="AuthFooter_icons">
        <a
          rel="norel"
          href="./"
          className="AuthFooter_icons_icon"
          target={"_blank"}
        >
          {" "}
          <i className="ri-linkedin-fill" />
        </a>
        <a href="./" className="AuthFooter_icons_icon" target={"_blank"}>
          {" "}
          <i className="ri-github-fill" />
        </a>
      </div> */}
      <div className="AuthFooter_text">
        {" "}
        © {currentYear} ChatNow All rights reserved.
      </div>
    </div>
  );
};
