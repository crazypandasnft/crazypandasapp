import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from "./image/pandaicon.png"
import Twitter from "./image/twitter.svg"
import Discord from "./image/discord.svg"

const Footer = () => {
  return (
    <>
    <div className='black-bg'>
        <div className='footer-container mx-auto col-10 '>
        <div className='footer-pandaicon d-flex'>
        <img  src={Icon} alt="" />
        <h2>CRAZY <br/>PANDA</h2>
        </div>
        <div className='footer-socialmedia-icon'>
            <a href='https://twitter.com/CrazyPanda_NFT'>
                <img src={Twitter} alt="" />
            </a>
            <NavLink to="#">
                <img src={Discord} alt="" />
            </NavLink>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer