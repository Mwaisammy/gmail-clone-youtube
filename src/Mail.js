import React from 'react'
import './Mail.css'
import { IconButton } from '@mui/material'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectOpenMail } from './features/mailSlice'
function Mail() {
  const navigate =useNavigate();
  const selectedMail = useSelector(selectOpenMail)
  return (
    <div className='mail'>
 
      <div className="mail__tools">

      <IconButton onClick={() => navigate('/')}/>
              <ArrowBack />
           <IconButton/>
           <IconButton/>
              <MoveToInbox/>
           <IconButton/>
           <IconButton/>
                <Error/>
           <IconButton/>
           <IconButton/>
                <Delete/>
           <IconButton/>
           <IconButton/>
                <Email/>
           <IconButton/>
           <IconButton/>
                <WatchLater/>
           <IconButton/>
           <IconButton/>
                <CheckCircle/>
           <IconButton/>
           <IconButton/> 
                <LabelImportant/>
           <IconButton/> 
           <IconButton/> 
                <MoreVert/>
           <IconButton/> 
           <IconButton/> 

        <div className="mail__toolsLeft">
        <IconButton/> 
               <UnfoldMore/>
        <IconButton/> 

        <IconButton/> 
               <Print/>
        <IconButton/> 
        <IconButton/> 
               <ExitToApp/>
        <IconButton/> 

        </div>
      </div>

      <div className="mail__body">
          <div className="mail__bodyHeader">
               <h2>{selectedMail?.subject}</h2>
               <LabelImportant className='mail__important'/>
               <p>{selectedMail?.title}</p>
               <p className='mail__time'>{selectedMail?.time}</p>
          </div>

          <div className="mail__message">
               <p>{selectedMail?.description}</p>
          </div>
      </div>
    </div>
  )
}

export default Mail