import React, { Component } from 'react'
import { useState } from 'react'
import IndexPage from './IndexPage.js'
import Footer from '../components/Footer.js'
import Header2 from './Header2.js'
import Main from './Main.js'
import ReportTable from './ReportTable.js'
import { hours } from './data.js'
import axios from 'axios'

const cookiesInfoURL = 'http://localhost:8000/api/v1/cookie_stands/'

export default function CookieStandAdmin(props) {

  const [cookies, setCookies] = useState([])

  const createCookiesHandler = (event) => {
    event.preventDefault()
    const cookiesInfo = {
      location: event.target.location.value,
      min: event.target.min.value,
      max: event.target.max.value,
      avg: event.target.avg.value,
      hourly_sales: [],
      total_sales: "",
    }



    randomHourly = randomHourlySales(cookiesInfo.min,cookiesInfo.max,cookiesInfo.avg)
    cookiesInfo.hourly_sales = randomHourly.randCust
    cookiesInfo.total_sales = randomHourly.total

    setCookies(x => [...x, cookiesInfo])

  }

  function randomHourlySales(min,max,avg){
    const randCust = []
    const cookiesPurches = []
    const total = 0

    for (let i = 0; i < hours.length; i++) {
      const customer = Math.floor(Math.random() * (Math.floor(~max) - Math.ceil(~min) + 1) - Math.ceil(~max))
      randCust.push(customer)
      const sales = Math.ceil(customer * avg)
      cookiesPurches.push(sales)
      total = total + customer
    }
    const returnObject = {cookiesPurches:cookiesPurches, total_sales:total, randCust: randCust}
    return returnObject
    
  }


  // get cookie stands from API
  async function cookiesFromAPI() {
    const credintials = { headers: { 'Authorization': 'Bearer ' + props.token } };
    const cookiesInfofromAPI = await axios.get('http://localhost:8000/api/v1/cookie_stands/', credintials)
    console.log(cookiesInfofromAPI.data)
  }
  cookiesFromAPI()

  // post new location to API
  async function postCookiesToAPIHandler(event) {
    event.preventDefault()
    const data= {
      "location": event.target.location.value,
      "hourly_sales": [],
      "minimum_customers_per_hour": event.target.min.value,
      "maximum_customers_per_hour": event.target.max.value,
      "average_cookies_per_sale": event.target.avg.value,
      "owner": null
    }
    const randomHourly = randomHourlySales(data.minimum_customers_per_hour, data.maximum_customers_per_hour, data.average_cookies_per_sale)
    console.log(randomHourly);
    data.hourly_sales = randomHourly.randCust
    const total_sales_per_location = randomHourly.total

    const credintials = {
      headers: { 'Authorization': 'Bearer ' + props.token },

    };

    const cookiesInfofromAPI = await axios.post('http://localhost:8000/api/v1/cookie_stands/', data, credintials)
    return cookiesFromAPI
  }

  // delete location from API
  // const deleteCookiesFromAPIHandler = (event) => {
  //   event.preventDefault()
  // }


  return (
    <>
      <IndexPage />
      <Header2 />
      <Main createCookiesHandler={createCookiesHandler} cookies={cookies} postCookiesToAPIHandler={postCookiesToAPIHandler} />
      <ReportTable cookies={cookies} />

      <Footer cookies={cookies} />
    </>
  )
}



