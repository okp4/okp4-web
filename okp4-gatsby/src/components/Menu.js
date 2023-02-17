import React, { useCallback, useState, useRef } from "react";
import { Link } from "gatsby";
import menu from "/content/transversals/menu.yaml";
import classNames from "classnames";
import { useOnHoverOutside } from "../hook/useOnHoverOutside";
import { useLocation } from "@reach/router";

const SubMenu = ({ subMenu }) => (
  <div className="header__submenu">
    <div className="header__submenu__container">
      <div className="header__submenu__content">
        {subMenu &&
          subMenu.map((submenuItem, index) => (
            <div key={index}>
              <div className="header__submenu__item">
                <Link to={submenuItem.link}>{submenuItem.name}</Link>
              </div>
              {subMenu.length > 1 && <div className="separator" />}
            </div>
          ))}
      </div>
    </div>
  </div>
);

const Menu = () => {
  const location = useLocation();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const subMenuRef = useRef(null);
  const closeSubMenu = useCallback(() => {
    setIsSubMenuOpen(false);
  }, []);

  useOnHoverOutside(subMenuRef, closeSubMenu);

  const handleMouseOver = useCallback(
    (menuItem) => {
      menuItem.name !== selectedMenu && setSelectedMenu(menuItem.name);
      setIsSubMenuOpen(!!menuItem.subMenuItems);
    },
    [selectedMenu]
  );

  const isActiveMenu = useCallback(
    (menuItem) => location.pathname.startsWith(menuItem.prefixPath),
    [location.pathname]
  );

  return (
    <nav className="header__tabs" ref={subMenuRef}>
      {menu.items.map((menuItem) => (
        <div
          key={menuItem.name}
          className="header__menu__item"
          onMouseOver={() => handleMouseOver(menuItem)}
          onFocus={() => handleMouseOver(menuItem)}
          role="menuitem"
          tabIndex={0}
        >
          <div
            className={classNames("header__menu__item--name", {
              active: isActiveMenu(menuItem),
            })}
          >
            {menuItem.name}
          </div>
          {isSubMenuOpen && selectedMenu === menuItem.name && (
            <SubMenu subMenu={menuItem.subMenuItems} />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Menu;