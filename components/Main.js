import React, { Component } from 'react'
import CreateForm from './CreateForm'

export default function Main(props) {

    return (
        <main className="bg-emerald-100">
            <CreateForm createCookiesHandler={props.createCookiesHandler} cookies={props.cookies}/>
            <div class="w-2/3 p-4 flex-auto mx-auto" >
                <p>{props.cookies}</p>
            </div>

        </main>

    )

}
