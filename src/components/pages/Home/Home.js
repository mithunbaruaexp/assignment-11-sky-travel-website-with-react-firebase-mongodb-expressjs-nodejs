import React from "react";
import Email from "./Sections/Email/Email";
import Hero from "./Sections/Hero/Hero";
import HomeAbout from "./Sections/HomeAbout/HomeAbout";
import Services from "./Sections/Services/Services";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <HomeAbout></HomeAbout>
      <Email></Email>
    </>
  );
};

export default Home;
