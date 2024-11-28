'use client'
 
import { createUser } from '../actions'
 
 
export function Signup() {
 // const [state, formAction] = useFormState(createUser, initialState)

  return (
      <button onClick={() => createUser()}>Sign up</button>
  )
}