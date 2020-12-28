import React from "react";

import Aside from "./Aside";
import * as css from "../utils/cssVariables";

const HomePageSection: React.FC = () => {
  return (
    <React.Fragment>
      <div className="home-page-section-container">
        <aside>
          <Aside />
        </aside>
        <main>
          <section className="section-heading-container">
            <h2 className="section-heading">Communities</h2>
            <input
              type="text"
              id="search"
              className="search-input"
              placeholder="Search..."
            />
          </section>
        </main>
      </div>

      <style jsx>{`
        .home-page-section-container {
          width: 100%;
          height: 500px;
          display: flex;
        }

        aside,
        main {
          height: 100%;
        }

        aside {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-right: 1px solid #ffffff;
        }

        main {
          width: 80%;
        }

        .section-heading-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .section-heading {
          margin: 0 30px;
        }

        .search-input {
          display: block;
          width: 30%;
          height: 40px;
          margin: 25px 30px;
          text-indent: 15px;
          background: ${css.inputBackground};
          color: #ffffff;
          border: 2px solid ${css.inputBorder};
          font-size: 0.8rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default HomePageSection;
