import React, { Component } from 'react'
import {useState} from 'react'
import IndexPage from './IndexPage.js'
import Footer from '../components/Footer.js'
import Header2 from './Header2.js'
import Main from './Main.js'
import ReportTable from './ReportTable.js'
import { hours } from './data.js'

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
        hourly_sales:[],
        total_sales: "",
      }
      
      const randCust = []
      const cookiesPurches = []
      const total = 0

      for (let i = 0; i < hours.length; i++) {
        const customer = Math.floor(Math.random() * (Math.floor(~cookiesInfo.max) - Math.ceil(~cookiesInfo.min) + 1) - Math.ceil(~cookiesInfo.max))
        randCust.push(customer)
        const sales = Math.ceil(customer * cookiesInfo.avg)
        cookiesPurches.push(sales)
        total = total +  customer
        
      }
      cookiesInfo.hourly_sales = cookiesPurches
      cookiesInfo.total_sales = total
  
      setCookies(x => [...x, cookiesInfo])
  
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