import React, { useCallback, useState, useRef } from "react";
import { Link } from "gatsby";
import menu from "/content/transversals/menu.yaml";
import classNames from "classnames";
import { useOnHoverOutside } from "../hook/useOnHoverOutside";
import { useLocation } from "@reach/router";

const SubMenu = ({ subMenu }) => {
  return (
    <nav className="header__submenu">
      <div className="header__submenu__container">
        {subMenu &&
          subMenu.map((submenuItem) => (
            <div className="header__submenu__item">
              <Link to={submenuItem.link}>{submenuItem.name}</Link>
              <div className="separator"></div>
            </div>
          ))}
      </div>
    </nav>
  );
};

const Menu = () => {
  const location = useLocation();
  const [subMenu, setSubMenu] = useState(null);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const subMenuRef = useRef(null);
  const closeSubMenu = useCallback(() => {
    setSubMenuOpen(false);
  }, []);

  useOnHoverOutside(subMenuRef, closeSubMenu);

  const handleMouseOver = useCallback((subMenuItems) => {
    setSubMenu(subMenuItems);
    setSubMenuOpen(!!subMenuItems);
  }, []);

  const isActiveMenu = useCallback(
    (menuItem) => location.pathname.startsWith(menuItem.prefixPath),
    []
  );

  return (
    <nav className="header__tabs" ref={subMenuRef}>
      {menu.items.map((menuItem) => (
        <div
          className={classNames(`header__menu__item`, {
            active: isActiveMenu(menuItem),
          })}
          onMouseOver={() => handleMouseOver(menuItem.subMenuItems)}
        >
          {menuItem.name}
        </div>
      ))}
      {isSubMenuOpen && <SubMenu subMenu={subMenu} />}
    </nav>
  );
};

export default Menu;