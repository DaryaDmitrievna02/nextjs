import React from 'react'
import Box from '@mui/material/Box';
import Posts from '../../components/posts';



const Page =   () => {

  return (
    <Box className='w-full flex justify-center items-center' sx={{ flexGrow: 1 }}>
    <Posts />
    
    </Box>
  )
}

export default Page