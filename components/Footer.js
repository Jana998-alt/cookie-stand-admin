import React, { Component } from 'react'

export default function Footer(props){

    return (
        <footer className="absolute bottom-0 w-full bg-emerald-400">
            <p>2021 {props.potato}</p>
        </footer>
    )

}
