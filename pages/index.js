import React, { useState } from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin.js'
import LoginForm from '../components/LoginForm.js'
import Footer from '../components/Footer.js'
import axios from 'axios'




const tokenUrl = 'http://127.0.0.1:8000/api/token/';
const refreshToken = 'http://127.0.0.1:8000/api/token/refresh/';



export default function Home() {

  const [token, setToken] = useState("")
  const [refreshToken, setRefreshToken] = useState("")

  async function getToken(userCredentials) {
    const token_recieved = await axios.post(tokenUrl, userCredentials)

    setToken(token_recieved.data.access)
    setRefreshToken(token_recieved.data.refresh)
  }

  if (token === "") {
    return (

      <LoginForm getToken={getToken}/>

    )
  }


  else {
    return (

      <CookieStandAdmin />

    )
  }

}
