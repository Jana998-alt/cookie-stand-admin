import Head from 'next/head'

export default function Home() {

  function createCookiesHandler(event){
    event.preventDefault()
    
    let location = event.target.location.value
    let min = event.target.min.value
    let max = event.target.max.value
    let avg = event.target.avg.value

    return JSON.stringify(location, min, max, avg)

  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>      
      </Head>
      <header className="flex bg-emerald-500 text-6xl">
        <h1>Cookie Stand Admin</h1> 
      </header>

      <main className="bg-emerald-100">

        <form type="submit" className="bg-emerald-300 text-xs w-2/3 mx-auto p-4" onSubmit={createCookiesHandler}>
          <h2>Create Cookie Stand</h2>
          <br/>
          <div className="flex-auto w-full">
          <label>location</label>
          <input type = "text" className="flex-auto w-full" name='location'></input>
          </div>

          <div className="flex ">
            <div className="p-4">
            <label>Minimum Customers Per Hour</label>
            <br/>
            <input type = "number" className="flex-auto" name='min'></input>
            </div>

            <div className="p-4">
            <label>Maximum Customers Per Hour</label>
            <br/>
            <input type = "number" className="flex-auto" name='max'></input>
            </div>

            <div className="p-4">            
            <label>Average Cookies Per Sale</label>
            <br/>
            <input type = "number" className="flex-auto" name='avg' step="any"></input>
            </div>

            <button className="p-4 bg-emerald-400 w-1/4">Create</button>
          </div>

        </form>

      </main>

      <footer className="flex bg-emerald-400">
        <p>2021</p>
      </footer>
    </div>
  )
}
