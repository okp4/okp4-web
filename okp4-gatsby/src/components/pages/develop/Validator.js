import * as React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import Halo from "../../animations/Halo.js";
import content from "/content/pages/develop/validator.yaml";
import { Link } from "gatsby";

const Validator = ({ files }) => (
  <div>
    <Halo />
  </div>
);

export default Validator;
