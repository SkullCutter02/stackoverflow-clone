import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { UserContext } from "../context/UserContext";
import host from "../utils/host";
import * as css from "../utils/cssVariables";

const Navbar: React.FC = () => {
  const userContext = useContext(UserContext);
  const router = useRouter();

  const logOut = async () => {
    try {
      await fetch(`${host}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      userContext.setState(null);
      await router.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <nav>
        <div className="nav-top-line" />
        <div className="nav-container">
          <div className="nav-left">
            <Link href={"/"}>
              <h1 className="nav-site-name">AskProgramming</h1>
            </Link>
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
            <div className="nav-right">
              <p>{userContext.user.username}</p>
              <button
                className="nav-auth-btn nav-sign-up-btn logout"
                onClick={logOut}
              >
                Log Out
              </button>
            </div>
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
          background: ${css.secondaryBackground};
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
          border: 1.5px solid ${css.buttonBorder};
          margin: 0 10px;
          cursor: pointer;
        }

        .nav-sign-up-btn {
          margin-right: 17%;
          background: ${css.mainButton};
          color: ${css.mainButtonText};
        }

        .nav-sign-up-btn:hover {
          background: ${css.mainButtonHover};
          color: ${css.mainButtonTextHover};
        }

        .nav-log-in-btn {
          color: ${css.secondaryButtonText};
          background: ${css.secondaryButton};
        }

        .nav-log-in-btn:hover {
          background: ${css.secondaryButtonHover};
          border: 1.5px solid #4d606d;
          color: ${css.secondaryButtonTextHover};
        }

        .logout {
          border: none;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
