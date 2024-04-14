/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Context } from "../../main";
import Login from "../Auth/Login";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

function Home() {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) return <Login />;
  return (
    <section className="homePage page">
      <HeroSection />
      <HowItWorks />
      <PopularCategories />
      <PopularCompanies />
    </section>
  );
}

export default Home;
