import React from "react";
import Halo from "../../Halo.js";

const Landing = () => {
  return (
    <section className="landing">
      <Halo></Halo>
      <div className="wrapper">
        <h1>
          The open
          <br />
          Knowledge protocol
        </h1>
        <p className="subtitle">
          OKP4 is an ever-expanding universe of applications powered by shared
          digital resources.
        </p>
      </div>
    </section>
  );
};

export default Landing;
