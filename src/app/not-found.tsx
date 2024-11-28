import { Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import React from 'react'

const NotFound = () => {
  return (
    <Box className='w-full h-svh flex items-center justify-center'>
      <ErrorOutlineIcon fontSize='large' className='m-2' />
      <Typography>
      <p>Page Not Found 404</p>
      <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      </Typography>
     
    </Box>
  )
}

export default NotFound;