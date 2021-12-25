import React, { Component } from 'react'
import {useState} from 'react'
import IndexPage from './IndexPage.js'
import Footer from '../components/Footer.js'
import Header2 from './Header2.js'
import Main from './Main.js'

export default function CookieStandAdmin() {

    const[cookies, setCookies]  = useState('')

    const createCookiesHandler = (event) => {
      event.preventDefault()
      const cookiesInfo = {
        location: event.target.location.value,
        min: event.target.min.value,
        max: event.target.max.value,
        avg: event.target.avg.value,
      }
      console.log(`${(JSON.stringify(cookiesInfo))}`);
      setCookies(`${(JSON.stringify(cookiesInfo))}`)
  
    }

        return (
            <>   
            <IndexPage/>
            <Main createCookiesHandler={createCookiesHandler} cookies={cookies}/>
            <Header2/>
            <Footer/>
            </>
        )
}




                // {/* <Main/>
                // <CreateForm/>
                // <ReportTable/>
                
                // <Footer/> */}
// export default CookieStandAdmin