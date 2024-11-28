'use client'
 
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'
import { Signup } from '../app/ui/signUp'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <Box>
    <Button 
    variant="outlined"
    onClick={() => router.push('/dashboard')}>
      Dashboard
    </Button>
    <Signup></Signup>
    </Box>
  )
}