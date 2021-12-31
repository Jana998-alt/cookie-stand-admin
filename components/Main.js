import React, { Component } from 'react'
import CreateForm from './CreateForm'

export default function Main(props) {

    return (
        <main className="bg-emerald-100">
            <CreateForm createCookiesHandler={props.createCookiesHandler} cookies={props.cookies} postCookiesToAPIHandler={props.postCookiesToAPIHandler}/>
            <div class="w-2/3 p-4 flex-auto mx-auto" >
                <p></p>
            </div>

        </main>

    )

}

