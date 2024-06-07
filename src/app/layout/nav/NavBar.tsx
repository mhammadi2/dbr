//navbar.jsx
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Button,
  Menu,
  MenuItem,
  Image,
  MenuMenu,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Container
} from "semantic-ui-react";
import NavbarMb from "./NavbarMb";
import NavbarLg from "./NavbarLg";
import { NavLink } from "react-router-dom";
// import SignedInMenu from "./SignedInMenu";
// import { useAppSelector } from "../../store/store";
// import SignedOutButton from "./SignedOutButton";

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  // const { authenticated } = useAppSelector((state) => state.auth);
  const [activeItem, setactiveItem] = useState("home");
  const handleItemClick = (e, { name }) => {
    setactiveItem(name);
  }
  const renderLinks = () => {
    return (
      <>
      {/* <Menu secondary > */}
        {/* <Container fluid> */}

        <Menu.Item
          name="logo"
          active={activeItem === "logo"}
          onClick={handleItemClick}
          // logo
          as={NavLink}
          to="/"
        >
          {/* <img className="logo" src="default.svg"/> */}
          <Image
            // src="default.svg"
            src="profile.png"
            size="tiny"
            circular
          />
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          // home
          as={NavLink}
          to="/home"
        />
      
        <Dropdown   item text="Chip Design" >
          <DropdownMenu  >
            <Dropdown.Item
              name="Analog IC Design"
              active={activeItem === "analogic"}
              onClick={handleItemClick}
              as={NavLink}
              to="/analogic"
              
              
            >
              Analog IC Design
            </Dropdown.Item>
            <Dropdown.Item name="Analog Layout Design"
              active={activeItem === "analogic"}
              onClick={handleItemClick}
              as={NavLink}
              to="/analogic">
              
              Analog Layout Design</Dropdown.Item>
            <Dropdown.Item
            name="RF IC Design"
            active={activeItem === "analogic"}
            onClick={handleItemClick}
            as={NavLink}
            to="/analogic"
            >
              RF IC Design
              </Dropdown.Item>
            <Dropdown.Item
            name="Mixed Signal IC Design"
            active={activeItem === "analogic"}
            onClick={handleItemClick}
            as={NavLink}
            to="/analogic"
            >
              Mixed Signal IC Design
              </Dropdown.Item>
          </DropdownMenu>
        </Dropdown>
        <Menu.Item
          name="About Us"
          active={activeItem === "about"}
          onClick={handleItemClick}
          position="right"
          as={NavLink}
          to="/about"
          visible={visible}
        />

        <Menu.Item
          name="Contact"
          active={activeItem === "contact"}
          onClick={handleItemClick}
          position="right"
          as={NavLink}
          to="/contact"
        />
        {/* </Container> */}
      {/* </Menu> */}


      </>
    );
  };

  // const none = useMediaQuery({ query: "(max-width:576px)" });
  const sm = useMediaQuery({ query: "(min-width:576px)" });
  const md = useMediaQuery({ query: "(min-width:768px)" });
  const lg = useMediaQuery({ query: "(min-width:992px)" });
  const xl = useMediaQuery({ query: "(min-width:1200px)" });
  const xxl = useMediaQuery({ query: "(min-width:1400px)" });
  // const size = { none, sm, md, lg, xl, xxl };
  const size = {  sm, md, lg, xl, xxl };
  return (
    <>
      
      {size.sm ? (
        <NavbarLg renderLinks={renderLinks} />
      ) : (
        <NavbarMb renderLinks={renderLinks} />
      )}
    </>
  );
}
