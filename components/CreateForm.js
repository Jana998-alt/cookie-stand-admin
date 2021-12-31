import React from 'react'

export default function CreateForm(props) {



    return (
        <div>
             <form type="submit" className="bg-emerald-300 text-xs w-2/3 mx-auto p-4" onSubmit={props.postCookiesToAPIHandler}>
                <h2>Create Cookie Stand</h2>
                <br />
                <div className="flex-auto w-full ">
                    <label>location</label>
                    <input type="text" className="flex-auto w-7/12 rounded-sm" name='location'></input>

                    <button className="rounded-sm p-2 m-4 bg-emerald-400 w-1/4">Create</button>
                </div>

                <div className="flex ">
                    <div className="p-2 m-4">
                        <label>Minimum Customers Per Hour</label>
                        <br />
                        <input type="number" className="flex-auto m-3 p-2 rounded-sm" name='min'></input>
                    </div>

                    <div className="p-2 m-4">
                        <label>Maximum Customers Per Hour</label>
                        <br />
                        <input type="number" className="flex-auto m-3 p-2 rounded-sm" name='max'></input>
                    </div>

                    <div className=" p-2 m-4">
                        <label>Average Cookies Per Sale</label>
                        <br />
                        <input type="number" className="flex-auto m-3 p-2 rounded-sm" name='avg' step="any"></input>
                    </div>


                </div>

            </form>
        </div>
    )
}
