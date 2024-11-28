import React from 'react'
import { Box } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';

type Props = {
    text?: string
}

const Loader = ({text} : Props) => {
  return (
    <Box className='w-full flex h-svh justify-center items-center'>
   <AutorenewIcon /> {text && text}
    </Box>
  )
}

export default Loader;