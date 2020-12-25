import React, { useContext } from "react";

import host from "../host";
import { UserContext } from "../context/UserContext";

const Navbar: React.FC = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);

  return (
    <React.Fragment>
      <nav>
        <div className="nav-top-line" />
        <div className="nav-container">
          <div className="nav-left">
            <h1 className="nav-site-name">AskProgramming</h1>
          </div>
          <div className="nav-right">
            <button className="nav-auth-btn nav-log-in-btn">Log In</button>
            <button className="nav-auth-btn nav-sign-up-btn">Sign Up</button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-top-line {
          width: 100%;
          height: 4px;
          background: #c46215;
        }

        .nav-container {
          background: #393939;
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 3px 5px black;
        }

        .nav-site-name {
          color: #f2f2f2;
          margin-left: 35px;
          font-size: 1.3rem;
          cursor: pointer;
          padding: 5px;
        }

        .nav-left {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .nav-right {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .nav-auth-btn {
          width: 80px;
          height: 60%;
          border-radius: 4px;
          border: 1px solid #4f6f87;
          margin: 0 10px;
          cursor: pointer;
        }

        .nav-sign-up-btn {
          margin-right: 17%;
          background: #3580c2;
          color: #ffffff;
        }

        .nav-log-in-btn {
          color: #bdedff;
          background: #3f4a50;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
