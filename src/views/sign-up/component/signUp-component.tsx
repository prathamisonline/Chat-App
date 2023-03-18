import "../signup.scss";
import folder from "../folder.png";
export const SignUpComponent = () => {
  return (
    <div className="signup_container">
      <div className="signup_container_card">
        <div className="signup-header">
          <div className="signup-header__title">Create Your Account</div>
          <div className="signup-header__text">
            Don't have an account? Create your account, it takes less than a
            minute.
          </div>
          <form className="signup-form">
            <input
              className="signup-form_input"
              type="text"
              placeholder="display name"
            />
            <input
              className="signup-form_input"
              type="email"
              placeholder="email"
            />
            <input
              className="signup-form_input"
              type="password"
              placeholder="password"
            />
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file" className="signup-form_label">
              <img className="signup-form_file" src={folder} alt="file" />
              <span>Add an avtar</span>
            </label>

            <button className="signup-form_button">Sign Up</button>
          </form>
          <div className="have-an-account">
            <span>Already have an account?</span>
            <div className="back-to-login">Log In</div>
          </div>
        </div>
        s
      </div>
    </div>
  );
};
