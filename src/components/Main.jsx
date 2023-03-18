import React from 'react'
import bullets from '../logos/bullet points.png'
import reactjs from '../logos/reactjs.png'
export default function Main() {
    return (
        <div>
            <div className='Main'>
                <h2 className='main-title'>Fun facts about React</h2>
                <div className='main-wrap'>
                    <img className='main-bullets' src={bullets}></img>
                    <ul className='main-ul'>
                       <li className=''>Was first released in 2013</li>
                      <li className=''>Was originally created by Jordan Walke</li>
                      <li className=''>Has well over 100K stars on GitHub</li>
                      <li className=''>Is maintained by Facebook</li>
                     <li className=''>Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
                    <img className='main-react' src={reactjs}></img>
                </div>
            </div>
        </div>
    )
}