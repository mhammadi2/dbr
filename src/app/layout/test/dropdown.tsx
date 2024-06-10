import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  MenuItem,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

const DropdownExamplePointingTwo = () => (
 
    <Dropdown  text='Messages' pointing='left' className='link item'>
      <DropdownMenu>
        <DropdownItem>Inbox</DropdownItem>
        <DropdownItem>Starred</DropdownItem>
        <DropdownItem>Sent Mail</DropdownItem>
        <DropdownItem>Drafts (143)</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Spam (1009)</DropdownItem>
        <DropdownItem>Trash</DropdownItem>
      </DropdownMenu>
    </Dropdown>
 
)

export default DropdownExamplePointingTwo