import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import ReactFlagsSelect from 'react-flags-select'

import { HomeOutlined, ContactsOutlined, UserOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/img/logo.webp'

// Importation des pages d'accueil

const NavBar = () => {
  /* RESPONSIVE */
  const style = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'end'
  }
  return (
    <Menu mode='horizontal' defaultSelectedKeys={['home']} style={style}>
      
      <Menu.Item key='home' icon={<HomeOutlined />}>
        <NavLink to='/home'>Home</NavLink>
      </Menu.Item>

      <Menu.Item key='contact' icon={<ContactsOutlined />}>
        <NavLink to='/contact'>Contact</NavLink>
      </Menu.Item>
      <Menu.Item key='about' icon={<UserOutlined />}> 
        <NavLink to='/about'>About</NavLink>
      </Menu.Item>
      <Menu.Item> 
      <ReactFlagsSelect 
        selected={'FR'} 
        countries={['GB', 'FR', 'DE', 'IT']} 
        />
      </Menu.Item>
     
    </Menu>
  )
}

export default NavBar
