import React, { useContext } from "react";
import Link from "next/link";

import { UserContext } from "../context/UserContext";

const Navbar: React.FC = () => {
  const userContext = useContext(UserContext);

  return (
    <React.Fragment>
      <nav>
        <div className="nav-top-line" />
        <div className="nav-container">
          <div className="nav-left">
            <h1 className="nav-site-name">AskProgramming</h1>
          </div>
          {userContext.user === undefined ? (
            <div className="nav-right">
              <Link href={"/auth/login"}>
                <button className="nav-auth-btn nav-log-in-btn">Log In</button>
              </Link>
              <Link href={"/auth/signup"}>
                <button className="nav-auth-btn nav-sign-up-btn">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <div className="nav-right">{userContext.user.username}</div>
          )}
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
          box-shadow: 0 3px 5px #151515;
        }

        .nav-site-name {
          color: #f2f2f2;
          margin-left: 50px;
          font-size: 1.3rem;
          cursor: pointer;
          padding: 10px 20px;
          height: 100%;
        }

        .nav-site-name:hover {
          background: #4a4a4a;
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
          border: 1.5px solid #4f6f87;
          margin: 0 10px;
          cursor: pointer;
        }

        .nav-sign-up-btn {
          margin-right: 17%;
          background: #3580c2;
          color: #d2d2d2;
        }

        .nav-sign-up-btn:hover {
          background: #076bb8;
          color: #e2e2e2;
        }

        .nav-log-in-btn {
          color: #bdedff;
          background: #3f4a50;
        }

        .nav-log-in-btn:hover {
          background: #4d606f;
          border: 1.5px solid #4d606d;
          color: #e2e2e2;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
