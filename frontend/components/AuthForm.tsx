import React from "react";

interface Props {
  formType: "signup" | "login";
}

const AuthForm: React.FC<Props> = ({ formType }) => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="auth-form-page-container">
        <form className="auth-form-container" onSubmit={submitForm}>
          <h1 className="auth-form-heading">
            {formType === "signup" ? "Signup" : "Login"}
          </h1>
          {formType === "signup" ? (
            <div className="auth-form auth-form-signup">
              <input
                type="text"
                className="auth-form-input"
                id="username"
                placeholder="Username: "
                required
              />
              <input
                type="text"
                className="auth-form-input"
                id="email"
                placeholder="Email: "
                required
              />
              <input
                type="password"
                className="auth-form-input"
                id="password"
                placeholder="Password: "
                required
              />
              <input
                type="password"
                className="auth-form-input"
                id="confirmPassword"
                placeholder="Confirm Password: "
                required
              />
              <div className="auth-form-checkbox-container">
                <input
                  type="checkbox"
                  className="auth-form-checkbox"
                  id="rememberMe"
                />
                <label
                  htmlFor="rememberMe"
                  className="auth-form-checkbox-label"
                >
                  Remember Me
                </label>
              </div>
              <button type="submit" className="auth-form-submit-btn">
                Signup
              </button>
            </div>
          ) : (
            <div className="auth-form auth-form-login">
              <input
                type="text"
                className="auth-form-input"
                id="identifier"
                placeholder="Username or Email: "
                required
              />
              <input
                type="password"
                className="auth-form-input"
                id="password"
                placeholder="Password: "
                required
              />
              <div className="auth-form-checkbox-container">
                <input
                  type="checkbox"
                  className="auth-form-checkbox"
                  id="rememberMe"
                />
                <label
                  htmlFor="rememberMe"
                  className="auth-form-checkbox-label"
                >
                  Remember Me
                </label>
              </div>
              <button type="submit" className="auth-form-submit-btn">
                Login
              </button>
            </div>
          )}
        </form>
      </div>

      <style jsx>{`
        .auth-form-page-container {
          width: 100%;
          height: calc(100vh - 40px - 4px);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .auth-form-container {
          height: 80%;
          width: 30%;
          min-width: 310px;
          transform: translateY(-30px);
        }

        .auth-form-heading {
          text-align: center;
          transform: translateY(70px);
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .auth-form-input {
          display: block;
          width: 100%;
          height: 40px;
          margin: 11px 0;
          text-indent: 15px;
          background: #454545;
          color: white;
          border: 2px solid #dedede;
          font-size: 0.8rem;
        }

        .auth-form-input::placeholder {
          font-size: 0.8rem;
          color: white;
        }

        #username {
          margin-top: 90px;
        }

        #identifier {
          margin-top: 140px;
        }

        .auth-form-checkbox-container {
          margin: 10px 0;
          width: 100%;
          display: flex;
          justify-content: flex-start;
        }

        .auth-form-checkbox-label {
          margin-left: 15px;
          font-size: 1rem;
          transform: translateY(1px);
        }

        .auth-form-checkbox {
          margin-left: 10px;
        }

        .auth-form-submit-btn {
          background: #3580c2;
          border: 1.5px solid #4f6f87;
          border-radius: 2px;
          color: #bebebe;
          width: 70px;
          height: 30px;
          margin-top: 10px;
          cursor: pointer;
          font-size: 0.8rem;
        }

        .auth-form-submit-btn:hover {
          background: #076bb8;
          color: #e2e2e2;
        }
      `}</style>
    </React.Fragment>
  );
};

export default AuthForm;
