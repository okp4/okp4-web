import React from "react";
import { Link } from "gatsby";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className="wrapper">
      <nav className="breadcrumbs">
        {breadcrumbs &&
          breadcrumbs.map((item, index) => (
            <div className="breadcrumbs__item">
              {item.link ? (
                <Link to={item.link} className="link">
                  {item.name}
                </Link>
              ) : (
                <a>{item.name}</a>
              )}
              {index < breadcrumbs.length - 1 && (
                <div className="separator">&nbsp;&rarr;&nbsp;</div>
              )}
            </div>
          ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
