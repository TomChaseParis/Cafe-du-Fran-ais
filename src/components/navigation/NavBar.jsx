import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import {  BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { setLng, setMode } from '../../redux/reducers/appReducer'
import ReactFlagsSelect from 'react-flags-select'

import { HomeOutlined, ContactsOutlined, UserOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
  const { lng, mode  } = useSelector(state => state.app)
  const dispatch = useDispatch() // call action

  /* RESPONSIVE */
  const style = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'end'
  }
  const isDark = mode === 'dark' 
  return (
    <Menu theme={isDark ? 'dark' : 'light'} mode='horizontal' defaultSelectedKeys={['home']} style={style}>
      <Menu.Item key='home' icon={<HomeOutlined />}>
        <NavLink to='/home'>Home</NavLink>
      </Menu.Item>
      <Menu.Item key='contact' icon={<ContactsOutlined />}>
        <NavLink to='/contact'>Contact</NavLink>
      </Menu.Item>
      <Menu.Item key='about' icon={<UserOutlined />} style={{ marginRight: '6rem' }}>
        <NavLink to='/about'>About</NavLink>
      </Menu.Item>
      <div style={{ position: 'absolute', right: '20px', top: '5px' }}>
        <ReactFlagsSelect
          placeholder=''
          selected={lng}
          onSelect={lng => dispatch(setLng(lng))}
          countries={['GB', 'FR', 'DE', 'IT']}
        />
      </div>

          

      <div style={{ position: 'absolute', right: '20px', top: '50px' }}>
      {
          isDark ? (
            <BsFillMoonFill style={{ cursor: 'pointer' }} onClick={() => dispatch(setMode('light'))} size={18} color="black"/>
          ) : <BsFillSunFill style={{ cursor: 'pointer' }}onClick={() => dispatch(setMode('dark'))} size={22} color="black"/>
        }     
      </div>
      
    </Menu>
  )
}

export default NavBar
