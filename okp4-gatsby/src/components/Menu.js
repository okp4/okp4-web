import React, { useEffect, useCallback, useState, useRef } from "react";
import { Link } from "gatsby";
import menu from "/content/transversals/menu.yaml";
import classNames from "classnames";
import { useLocation } from "@reach/router";
import { useBreakpoint } from "../hook/useBreakpoint";
import { useOnEventOutside } from "../hook/useOnEventOutside";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";

const SubMenu = ({ subMenu }) => (
  <div className="header__submenu">
    <div className="header__submenu__container">
      <div className="header__submenu__content">
        {subMenu &&
          subMenu.map((submenuItem, index) => (
            <div key={index}>
              <div className="header__submenu__item">
                {submenuItem.link ? (
                  <Link to={submenuItem.link}>{submenuItem.name}</Link>
                ) : (
                  <div className="header__submenu__external__link">
                    <a href={submenuItem.url} rel="noreferrer" target="_blank">
                      {submenuItem.name}
                    </a>
                    <IconArrowtr className="arrow" />
                  </div>
                )}
              </div>
              {subMenu.length > 1 && <div className="separator" />}
            </div>
          ))}
      </div>
    </div>
  </div>
);

const Menu = ({ handleMenuItemClick }) => {
  const { isLarge } = useBreakpoint();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(null);

  const subMenuRef = useRef(null);
  const closeSubMenu = useCallback(() => {
    setSelectedMenu(null);
  }, []);

  useOnEventOutside(subMenuRef, "mouseover", closeSubMenu);

  const handleMouseOver = useCallback(
    (menuItem) => {
      isLarge &&
        menuItem.name !== selectedMenu?.name &&
        setSelectedMenu(menuItem);
    },
    [isLarge, selectedMenu]
  );

  const handleClick = useCallback(
    (menuItem) => {
      const { name } = menuItem;
      const isMenuItemSelected = name === selectedMenu?.name;
      setSelectedMenu(isMenuItemSelected ? null : menuItem);
    },
    [selectedMenu]
  );

  useEffect(() => {
    handleMenuItemClick(!!selectedMenu?.subMenuItems?.length);
  }, [handleMenuItemClick, selectedMenu]);

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
          {selectedMenu?.name === menuItem.name && menuItem.subMenuItems && (
            <SubMenu subMenu={menuItem.subMenuItems} />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Menu;
