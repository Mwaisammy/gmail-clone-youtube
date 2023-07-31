import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import {  useDispatch } from 'react-redux';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { login } from './userSlice';
import { auth } from './firebase';



function Login() {
const dispatch = useDispatch();

// const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

const signIn = () => {
  signInWithPopup(auth, googleProvider).then((result) => {
    const { displayName, email, photoURL} = result.user;



    dispatch(
      login(
        {
          displayName, email, photoURL
        }
      )
    )
  }).catch((error) => {
    alert(error.message)
  })



}


  return (
    <div className='Login'>
        <div className="login__container">
            <img src="https://cdn.vox-cdn.com/thumbor/poDiPWB_ZM1VtgA-FclJVc-Hrl4=/0x0:1320x880/2000x1333/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="" />
          <Button variant='contained' color='primary' onClick={signIn}> Login </Button>
         </div>
    </div>
  )
}

export default Login