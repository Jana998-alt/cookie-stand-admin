import React from 'react'
import { hours } from './data'

export default function ReportTable(props) {

    const even = true
    const totals = []
    for (let i = 0; i < hours.length; i++) {
        totals.push(0)
    }

    props.cookies.map((cookie, index) => {
        for (let i = 0; i < hours.length; i++) {
            totals[i] = totals[i] + cookie.hourly_sales[i]
        }
    })
    console.log(totals);

    if (props.cookies.length == 0) {
        return <h2 className="mt-4 md:text-2xl align-middle">No Cookie Stands Available</h2>
    }



    else {
        return (
            <table className="border-collapse border-black bg-emerald-300 text-xs w-2/3 mx-auto p-4 border">

                <thead className='bg-emerald-500'>

                    <td></td>
                    {hours.map(hour =>
                        <td>{hour}</td>
                    )}

                </thead>


                {
                    props.cookies.map(cookie => {
                        if (even) {
                            even = false
                            return (
                                <tr className='border border-gray-700'>
                                    <td>{cookie.location}</td>
                                    {cookie.hourly_sales.map(hour_sales => {
                                        return (<td className='border border-gray-700'>{hour_sales}</td>)
                                    })}

                                </tr>)
            
                        }
                        else{
                            even = true
                            return (
                                <tr>
                                    <td className='bg-emerald-100 border border-gray-700'>{cookie.location}</td>
                                    {cookie.hourly_sales.map(hour_sales => {
                                        return (<td  className='bg-emerald-100 border border-gray-700'>{hour_sales}</td>)
                                    })}

                                </tr>)
                        }

                    })
                }

                {
                    <tr className='bg-emerald-500'>
                        <td></td>
                        {

                            totals.map(total => {
                                return (
                                    <td className='border border-gray-700'>{total}</td>
                                )
                            })

                        }

                    </tr>
                }

            </table>
        )
    }
}