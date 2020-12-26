import React from "react";

import PageHeading from "../components/PageHeading";
import HomePageSection from "../components/HomePageSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <PageHeading
        heading={
          "Ever got stuck on something? AskProgramming is the ultimate place to ask!"
        }
      />
      <HomePageSection />
    </div>
  );
};

export default HomePage;
