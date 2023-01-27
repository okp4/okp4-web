import * as React from "react";
import Halo from "../../animations/Halo";
import contentCommunity from "../../../../content/pages/community/community.yaml";

const JoinUs = () => {
  <section className="community">
    <Halo />
    <div className="wrapper">
      <div className="community__content">
        <div>
          <h3>{contentCommunity.title}</h3>
        </div>
      </div>
    </div>
  </section>;
};

export default JoinUs;
