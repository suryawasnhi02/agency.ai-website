
import React from "react";
import OurWork from "../components/OurWork";
import TrustedBy from "../components/TrustedBy"; // ✅ correct import
import OurWorkHero from "../components/OurWorkHero";
import InfluencerWork from "../components/InfluencerWork";

const WorkPage = () => {
  return (
    <>
      <OurWorkHero />
      <TrustedBy />
      <InfluencerWork />
      {/* <OurWork /> */}
    </>
  );
};

export default WorkPage;
