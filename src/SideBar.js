
import { Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import './SideBar.css'
import SidebarOptions from './SidebarOptions'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'
function SideBar() {
const dispatch = useDispatch();

  return (
    <div className='sidebar'>
      <Button startIcon={<Add fontSize='large' />}
      className='sidebar__compose'
      onClick={()=>dispatch(openSendMessage())}>Compose
      </Button>


      <SidebarOptions Icon ={Inbox} title='Inbox' number='54' selected="true"/>
      <SidebarOptions Icon ={Star} title='Starred' number='54'/>
      <SidebarOptions Icon ={LabelImportant} title='Snoozed' number='54'/>
      <SidebarOptions Icon ={NearMe} title='Important' number='54'/>
      <SidebarOptions Icon ={Note} title='Sent' number='54'/>
      <SidebarOptions Icon ={ExpandMore} title='More' number='54'/>


      <div className='sidebar__footer'>


      <div className="sibebar__footerIcons">
        <IconButton />
        <Person />
        <IconButton/>
        <Duo/>
        
        <IconButton/>
        <Phone/>
        <IconButton/>
      </div>
      </div>
    </div>
  )
}

export default SideBar