import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';


const NavBar = ({children} : {children: React.ReactNode}) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='bg-slate-600 flex justify-between w-100'>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Dashboard
          </Typography>
          <div>
          {children}
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar;