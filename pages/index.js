import React, {useState} from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin.js'
import Head from '../components/Head.js'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'

export default function Home() {
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

  const potato = "I'll call you my rose"
  return (
    // <Footer/>
    <div className="bg-emerald-100">
      {/* <CookieStandAdmin/> */}
      {/* <Head/> */}
      <Footer/> 
    {/* <Header/>

    <Main/>
    <CreateForm/>
    <ReportTable/>
    
    <Footer/> */}
    </div>
    // <div className="bg-emerald-100">
      

    //   <header className="flex bg-emerald-500 text-6xl">
    //     <h1>Cookie Stand Admin</h1> 
    //   </header>

    //   <main className="bg-emerald-100">

    //     <form type="submit" className="bg-emerald-300 text-xs w-2/3 mx-auto p-4" onSubmit={createCookiesHandler}>
    //       <h2>Create Cookie Stand</h2>
    //       <br/>
    //       <div className="flex-auto w-full">
    //       <label>location</label>
    //       <input type = "text" className="flex-auto w-full" name='location'></input>
    //       </div>

    //       <div className="flex ">
    //         <div className="p-4">
    //         <label>Minimum Customers Per Hour</label>
    //         <br/>
    //         <input type = "number" className="flex-auto" name='min'></input>
    //         </div>

    //         <div className="p-4">
    //         <label>Maximum Customers Per Hour</label>
    //         <br/>
    //         <input type = "number" className="flex-auto" name='max'></input>
    //         </div>

    //         <div className="p-4">            
    //         <label>Average Cookies Per Sale</label>
    //         <br/>
    //         <input type = "number" className="flex-auto" name='avg' step="any"></input>
    //         </div>

    //         <button className="p-4 bg-emerald-400 w-1/4">Create</button>
    //       </div>

    //     </form>

    //     <div class="w-2/3 p-4 flex-auto mx-auto" >
    //       <p>{cookies}</p>
    //     </div>

    //   </main>

    //   <footer className="absolute bottom-0 w-full bg-emerald-400">
    //     <p>2021</p>
    //   </footer>
    // </div>
  )

}
