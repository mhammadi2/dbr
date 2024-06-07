
import HomePage from "../features/home/HomePage"
import { Container } from "semantic-ui-react"
import { Outlet,useLocation } from "react-router-dom"
import NavBar from "./nav/NavBar"
import FootBar from "./footer/FootBar"
import MenuExampleBasic from "./test/test"

function App() {
  const location = useLocation();
  return (
    <>
    {/* <MenuExampleBasic/> */}
    <NavBar/>
    <Container className='main'>
      {location.pathname==='/' ? <HomePage/> : <Outlet/> }
      {/* <Outlet/> */}
    {/* <ModalManager/> */}
    </Container>
    <FootBar/>
    
    </>
  )
}

export default App
