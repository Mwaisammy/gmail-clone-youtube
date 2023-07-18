import React from 'react'
import './SendMail.css'
import { Close } from '@mui/icons-material'
function SendMail() {
  return (
    <div className="sendMail">

    <div classMail='sendMail__header'>
        <h3>New Message</h3>
        <Close className='sendMail__close'/>
    </div>

    <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <div className="sendMail__options">
            <button>Send</button>
        </div>
    </form>

    </div>



  )
}

export default SendMail