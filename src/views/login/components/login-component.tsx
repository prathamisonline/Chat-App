import "../login.scss";

export const LoginComponent = () => {
  return (
    <div className="login_container">
      <div className="login_container_card">
        <div className="login-header">
          <div className="login-header__title">Welcome Back</div>
          <div className="login-header__text">
            Enter your email address and password to access account..
          </div>
        </div>
        <form className="input">
          <input className="input_field" type="email" placeholder="email" />
          <input
            className="input_field"
            type="password"
            placeholder="password"
          />
        </form>
        <div className="create-account">
          <span>You don't have an account?</span>
          <div className="go-to-signUp">Sign In</div>
        </div>
      </div>
    </div>
  );
};
