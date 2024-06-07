//Navbar.Mb
import { useState } from 'react'
import { Menu, Sidebar, Image } from 'semantic-ui-react'
function Overlay() {
  return (
    <div style={{
      backgroundColor: "rgba(0, 0, 0, 0.795)",
      position: "fixed",
      height: "110vh",
      // width:,
    }} />
  )
}
function HamIcon() {
  return (<i className="big bars icon inverted" />)
}
function CloseIcon() {
  return (<i className="big close red icon" />)
}
function NavbarMb({renderLinks}) {
  const [visible, setVisible] = useState(false)
  const [icon, setIcon] = useState(HamIcon)
  const hideSidebar = () => {
    setIcon(HamIcon)
    setVisible(false)
  }
  const showSidebar = () => {
    setIcon(CloseIcon)
    setVisible(true)
  }
  const toggleSidebar = () => {
    visible ? hideSidebar() : showSidebar()
  }
  return (
    <>
      {visible && <Overlay />}
      <Menu
       inverted
        size="tiny"
        borderless
        attached
        // stackable
        visible={visible}
       
      >
        <Menu.Item>
          {/* <img src="profile.png" width="35px" height="35px" alt="" />
           */}
           <Image
            // src="default.svg"
            src="profile.png"
            size="tiny"
            circular
          />
        </Menu.Item>
        <Menu.Menu position='right'  visible={visible}>
          <Menu.Item onClick={toggleSidebar}>
            {icon }
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Sidebar as={Menu}
        animation='overlay'
        icon='labeled' 
        inverted
        vertical
        visible={visible}
        width='thin'
        onClick={toggleSidebar}
      >
      {renderLinks()}
      </Sidebar>
    </>
  )
}

export default NavbarMb