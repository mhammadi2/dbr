//NavbarLg.jsx
import { Menu, Segment } from 'semantic-ui-react'
export default function NavbarLg({renderLinks}) {
    return (
      <>
      <Segment  attached >
      
        {renderLinks()}
     
      </Segment>
      </>
    )
  }
