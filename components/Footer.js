import React, { Component } from 'react'

export default function Footer(props){
    const total_locations = 0
    props.cookies.map(cookie => {
        total_locations = total_locations + 1
    })
    return (
        <footer className="absolute bottom-0 w-full bg-emerald-400">
            <p>{total_locations} Locations World Wide</p>
        </footer>
    )

}
