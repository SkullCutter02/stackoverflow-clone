import React from "react";

import * as css from "../cssVariables";

const HomePageSection: React.FC = () => {
  return (
    <React.Fragment>
      <div className="home-page-section-container">
        <aside>
          <button className="section-btn ask-question-btn">
            <i className="fas fa-pencil-alt" /> Ask a Question
          </button>
          <button className="section-btn request-community-btn">
            <i className="fas fa-tags" /> Request a Community
          </button>
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

        .section-btn {
          background-color: ${css.mainButton};
          border: 1.5px solid ${css.buttonBorder};
          color: ${css.mainButtonText};
          height: 35px;
          width: 60%;
          font-size: 70%;
          cursor: pointer;
          border-radius: 2px;
          margin-top: 40px;
        }

        .section-btn:hover {
          background-color: ${css.mainButtonHover};
          color: ${css.mainButtonTextHover};
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
