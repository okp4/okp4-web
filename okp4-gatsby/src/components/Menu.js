import React, { useCallback, useState, useRef } from "react";
import { Link } from "gatsby";
import menu from "/content/transversals/menu.yaml";
import classNames from "classnames";
import { useOnHoverOutside } from "../hook/useOnHoverOutside";
import { useLocation } from "@reach/router";
import { useBreakpoint } from "../hook/useBreakpoint";

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
  const { isLarge } = useBreakpoint();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(null);

  const subMenuRef = useRef(null);
  const closeSubMenu = useCallback(() => {
    setSelectedMenu(null);
  }, []);

  useOnHoverOutside(subMenuRef, closeSubMenu);

  const handleMouseOver = useCallback(
    (menuItem) => {
      isLarge &&
        menuItem.name !== selectedMenu &&
        setSelectedMenu(menuItem.name);
    },
    [isLarge, selectedMenu]
  );

  const handleClick = useCallback(
    (menuItem) => {
      const { name } = menuItem;
      const isMenuItemSelected = name === selectedMenu;
      setSelectedMenu(isMenuItemSelected ? null : name);
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
          onClick={() => handleClick(menuItem)}
          onKeyDown={() => handleClick(menuItem)}
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
          {selectedMenu === menuItem.name && menuItem.subMenuItems && (
            <SubMenu subMenu={menuItem.subMenuItems} />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Menu;
