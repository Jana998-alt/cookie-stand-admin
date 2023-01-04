import React, { useState } from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin.js'
import LoginForm from '../components/LoginForm.js'
import Footer from '../components/Footer.js'
import axios from 'axios'
import next from 'next'

export default function Home() {

  const dburl = process.env.NEXT_PUBLIC_DBHOST
  const tokenUrl = dburl + '/api/token/';
  const refreshTokenUrl = dburl + '/api/token/refresh/'; 

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

      <CookieStandAdmin token = {token} dburl = {dburl}/>

    )
  }

}
