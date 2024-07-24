import React, { useState } from 'react'
import { AppBar, Box, Typography, Toolbar, IconButton, Drawer } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../../Styles/HeaderStyle.css'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //handle menu click
  const handeldrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  //menu drawer
  const drawer = (
    <Box onClick={handeldrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={"goldenrod"} variant='h6' component={"div"} sx={{ flexGrow: 1 }}>
        <FastfoodIcon />My Resturant
      </Typography>
      <ul className='mobile-navigation'>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/menu'}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About Us</NavLink>
        </li>
      </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton color="inherit" aria-label='open drewer' edge="start" sx={{ mr: 2, display: { sm: "none" } }} onClick={handeldrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography color={"goldenrod"} variant='h6' component={"div"} sx={{ flexGrow: 1 }}>
              <FastfoodIcon />My Resturant
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: "block" } }}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'}>Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>About Us</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer variant='temporary' open={mobileOpen} onClose={handeldrawerToggle} sx={{ display: { xs: 'block', sm: 'none' } }}>
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  )
}

export default Header
