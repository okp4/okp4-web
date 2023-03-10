import React from "react";
import { Link } from "gatsby";

const Breadcrumbs = ({ breadcrumbs }) => (
  <div className="wrapper">
    <nav className="breadcrumbs">
      {breadcrumbs &&
        breadcrumbs.map((item, index) => (
          <div key={index} className="breadcrumbs__item">
            {item.link ? (
              <Link to={item.link} className="link">
                {item.name}
              </Link>
            ) : (
              <span>{item.name}</span>
            )}
            {index < breadcrumbs.length - 1 && (
              <div className="separator">&nbsp;&rarr;&nbsp;</div>
            )}
          </div>
        ))}
    </nav>
  </div>
);

export default Breadcrumbs;
