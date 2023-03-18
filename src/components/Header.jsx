import React from 'react'
import ReactLogo from '../logos/logo.png'

export default function Header() {
    return (
        <div className='header'>
            <img className='header-logo' src={ReactLogo}></img>
            <h4 className='header-text'>React Course - Project 1</h4>
        </div>
    )
}