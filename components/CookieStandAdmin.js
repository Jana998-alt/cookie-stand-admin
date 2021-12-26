import React, { Component } from 'react'
import {useState} from 'react'
import IndexPage from './IndexPage.js'
import Footer from '../components/Footer.js'
import Header2 from './Header2.js'
import Main from './Main.js'
import ReportTable from './ReportTable.js'

export default function CookieStandAdmin() {

    const[cookies, setCookies]  = useState([])

    console.log(cookies);

    const createCookiesHandler = (event) => {
      event.preventDefault()
      const cookiesInfo = {
        location: event.target.location.value,
        min: event.target.min.value,
        max: event.target.max.value,
        avg: event.target.avg.value,
        hourly_sales:[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
      }


      
      setCookies(x => [...x, cookiesInfo])
      console.log(cookies);
  
    }
    

        return (
            <>   
            <IndexPage/>
            <Header2/>
            <Main createCookiesHandler={createCookiesHandler} cookies={cookies}/>
            <ReportTable cookies = {cookies}/>

            <Footer cookies = {cookies}/>
            </>
        )
}




                // {/* <Main/>
                // <CreateForm/>
                // <ReportTable/>
                
                // <Footer/> */}
// export default CookieStandAdmin