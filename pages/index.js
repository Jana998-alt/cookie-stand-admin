import React, { useState } from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin.js'
import LoginForm from '../components/LoginForm.js'
import Footer from '../components/Footer.js'
import axios from 'axios'
import next from 'next'

export default function Home() {

  const dburl = process.env.DBHOST
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
      <head>
  <title>Cookies</title>
</head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SX60M6MWJD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SX60M6MWJD');
</script>

      <CookieStandAdmin token = {token} dburl = {dburl}/>

    )
  }

}
