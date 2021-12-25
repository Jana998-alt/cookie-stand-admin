import React from 'react'
import { hours } from './data'

export default function ReportTable(props) {

    // const [reports, setReports] = useState(None)

    // const setReports = (event) => {

    //     table = <></>

    //     for (let i = 0; i < hours.length; i++) {
    //         props.cookies.hourly_sales.map(cell => {
    //             return (
    //                 <td>cell</td>
    //             )
    //         }
    //         )
    //     }
    // }

    const totals = []
    for (let i = 0; i < hours.length; i++) {
        totals.push(0)
    }

    props.cookies.map((cookie, index) => {
        for(let i = 0; i < hours.length; i++){
            totals[i] = totals[i] + cookie.hourly_sales[i]
        }
    })
    console.log(totals);

    if (props.cookies == []) {
        return <h2 className="mt-4 md:text-2xl">No Cookie Stands Available</h2>
    }



    else {
        return (
            <table>

                <thead>

                    <td></td>
                    {hours.map(hour =>
                        <td>{hour}</td>
                    )}

                </thead>


                {
                    props.cookies.map(cookie => {
                        return (
                            <tr>
                                <th>{cookie.location}</th>
                                {cookie.hourly_sales.map(hour_sales => {
                                    return (<td>{hour_sales}</td>)
                                })}

                            </tr>)
                    })
                }

                {
                    <tr>
                        <td></td>
                        {

                            totals.map(total => {
                                return(
                                    <td>{total}</td>
                                )
                            })

                        }

                    </tr>
                }

            </table>
        )
    }
}