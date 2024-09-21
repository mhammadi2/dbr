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
  Container,
  Segment,
} from "semantic-ui-react";
import NavbarMb from "./NavbarMb";
import NavbarLg from "./NavbarLg";
import { NavLink } from "react-router-dom";
import { Icon } from 'semantic-ui-react';

export default function Navbar() {
  const [activeItem, setactiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setactiveItem(name);

  const renderLinks = (vertical : boolean) => {
    if (!vertical) return (
      <>
        <div>
          <Menu fluid size='huge'>
            <Container>
            <Menu.Menu position='right'>
              <Menu.Item
                name='linkedin's
                active={activeItem === 'linkedin'}
                onClick={handleItemClick}
                href='https://www.linkedin.com/in/your-profile'
                target='_blank'
              >
                <Icon name='linkedin' />
                LinkedIn
              </Menu.Item>

              <Menu.Item
                name='email'
                active={activeItem === 'email'}
                onClick={handleItemClick}
                href='mailto:your-email@example.com'
              >
                <Icon name='mail' />
                Email
              </Menu.Item>
            </Menu.Menu>
            </Container>
          </Menu>
     
          <Menu  fluid size='huge'  borderless>
            <Container >

            <Menu.Item
              as={NavLink}
              to='/home'
              name='home'
              active={activeItem === 'home'}
              onClick={handleItemClick}
            >
              <Image src="profile.png" size="tiny" circular />
            </Menu.Item>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={handleItemClick}
              // home
              as={NavLink}
              to="/home"
            />

            <Dropdown item text="Chip"  >
              <Dropdown.Menu className="left" >
                <DropdownItem
                  name="Layout Design"
                  active={activeItem === "layoutic"}
                  onClick={handleItemClick}
                  as={NavLink}
                  to="/layoutic"
                >
                  Layout Design
                </DropdownItem>
                <DropdownItem
                  name="RF Design"
                  active={activeItem === "analogic"}
                  onClick={handleItemClick}
                  as={NavLink}
                  to="/analogic"

                >
                  RF Design
                </DropdownItem>
                <DropdownItem
                  name="Mixed Signal Design"
                  active={activeItem === "mixedic"}
                  onClick={handleItemClick}
                  as={NavLink}
                  to="/mixedic"
                >
                  Mixed Signal Design
                </DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
              name="About Us"
              active={activeItem === "about"}
              onClick={handleItemClick}
              position="right"
              as={NavLink}
              to="/about"
            // visible={visible}
            />
            <Menu.Item
              name="Contact Us"
              active={activeItem === "contact"}
              onClick={handleItemClick}
              position="right"
              as={NavLink}
              to="/contact"
            />
            <Menu.Item
              name="Patent Search"
              active={activeItem === "patent"}
              onClick={handleItemClick}
              position="right"
              as={NavLink}
              to="/patent"
            />
            </Container>
          </Menu>
        </div>


      </>
    );
    return (
      <>
        <div>
          <Menu fluid size='huge'>
            <Container>
            <Menu.Menu position='right'>
              <Menu.Item
                name='linkedin's
                active={activeItem === 'linkedin'}
                onClick={handleItemClick}
                href='https://www.linkedin.com/in/your-profile'
                target='_blank'
              >
                <Icon name='linkedin' />
                LinkedIn
              </Menu.Item>

              <Menu.Item
                name='email'
                active={activeItem === 'email'}
                onClick={handleItemClick}
                href='mailto:your-email@example.com'
              >
                <Icon name='mail' />
                Email
              </Menu.Item>
            </Menu.Menu>
            </Container>
          </Menu>
     
          <Menu  fluid size='huge'  vertical borderless>
            <Container >

            <Menu.Item
              as={NavLink}
              to='/home'
              name='home'
              active={activeItem === 'home'}
              onClick={handleItemClick}
            >
              <Image src="profile.png" size="tiny" circular />
            </Menu.Item>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={handleItemClick}
              // home
              as={NavLink}
              to="/home"
            />

            <Dropdown item text="Chip"  >
              <Dropdown.Menu className="left" >
                <DropdownItem
                  name="Layout Design"
                  active={activeItem === "layoutic"}
                  onClick={handleItemClick}
                  as={NavLink}
                  to="/layoutic"
                >
                  Layout Design
                </DropdownItem>
                <DropdownItem
                  name="RF Design"
                  active={activeItem === "analogic"}
                  onClick={handleItemClick}
                  as={NavLink}
                  to="/analogic"

                >
                  RF Design
                </DropdownItem>
                <DropdownItem
                  name="Mixed Signal Design"
                  active={activeItem === "mixedic"}
                  onClick={handleItemClick}
                  as={NavLink}
                  to="/mixedic"
                >
                  Mixed Signal Design
                </DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
              name="About Us"
              active={activeItem === "about"}
              onClick={handleItemClick}
              position="right"
              as={NavLink}
              to="/about"
            // visible={visible}
            />
            <Menu.Item
              name="Contact Us"
              active={activeItem === "contact"}
              onClick={handleItemClick}
              position="right"
              as={NavLink}
              to="/contact"
            />
            <Menu.Item
              name="Patent Search"
              active={activeItem === "patent"}
              onClick={handleItemClick}
              position="right"
              as={NavLink}
              to="/patent"
            />
            </Container>
          </Menu>
        </div>


      </>
    );
  };

  const none = useMediaQuery({ query: "(max-width:576px)" });
  const sm = useMediaQuery({ query: "(min-width:576px)" });
  const md = useMediaQuery({ query: "(min-width:768px)" });
  const lg = useMediaQuery({ query: "(min-width:992px)" });
  const xl = useMediaQuery({ query: "(min-width:1200px)" });
  const xxl = useMediaQuery({ query: "(min-width:1400px)" });
  const size = { none, sm, md, lg, xl, xxl };
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
